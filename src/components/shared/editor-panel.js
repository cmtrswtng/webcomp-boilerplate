import { LitElement, html, css } from 'lit';
import '@tinymce/tinymce-webcomponent';

export class EditorPanel extends LitElement {
  static properties = {
    templates: { type: Array },
    isEditorReady: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      flex:3;
    }

    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      padding: 16px;
      height: calc(100vh - 48px);
      box-sizing: border-box;
      overflow: hidden;
    }

    .toolbar {
      display: flex;
      gap: 12px;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 8px;
      border: 1px solid #e9ecef;
      flex-shrink: 0;
    }

    .insert-button {
      padding: 10px 32px;
      background: #4361ee;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
    }

    .insert-button:hover {
      background: #3a56d4;
      transform: translateY(-1px);
    }

    .insert-button:active {
      transform: translateY(0);
    }

    .insert-button:disabled {
      background: #adb5bd;
      cursor: not-allowed;
      transform: none;
    }

    :host ::slotted(.tox-tinymce) {
      border-radius: 8px !important;
      border: 1px solid #e9ecef !important;
      flex: 1 !important;
      height: auto !important;
    }

    :host ::slotted(.tox .tox-edit-area__iframe) {
      height: 100% !important;
    }

    :host ::slotted(.tox .tox-toolbar) {
      background: #f8f9fa !important;
      border-bottom: 1px solid #e9ecef !important;
    }

    :host ::slotted(.tox .tox-tbtn) {
      color: #495057 !important;
    }

    :host ::slotted(.tox .tox-tbtn:hover) {
      background: #e9ecef !important;
    }

    .error-option {
      color: #e03131;
    }

    @media (max-width: 1024px) {
      .editor-container {
        height: calc(100vh - 32px);
      }

      .insert-button {
        padding: 8px 24px;
      }
    }

    @media (max-width: 768px) {
      .editor-container {
        height: auto;
        min-height: 50vh;
      }

      .insert-button {
        width: 100%;
        justify-content: center;
      }

      :host ::slotted(.tox .tox-toolbar__group) {
        flex-wrap: wrap;
      }

      :host ::slotted(.tox .tox-tbtn) {
        padding: 4px !important;
      }
    }

    @media (max-width: 480px) {
      .editor-container {
        padding: 12px;
      }

      .toolbar {
        padding: 8px;
      }
    }
  `;

  constructor() {
    super();
    this.templates = [];
    this.tinymceEditorInstance = null;
    this.isEditorReady = false;
  }

  firstUpdated() {
    this.initializeEditor();
  }

  initializeEditor() {
    try {
      const editorEl = this.shadowRoot.querySelector('tinymce-editor');
      if (!editorEl) {
        throw new Error('Editor element not found');
      }
      
      window.tinymce.init({
        target: editorEl,
        height: 500,
        menubar: false,
        plugins: 'lists link image table code help wordcount',
        toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | indent outdent | bullist numlist | link image | removeformat help',
        setup: (editor) => {
          this.tinymceEditorInstance = editor;
          editor.on('init', () => {
            console.log('Editor initialized');
            this.isEditorReady = true;
            this.attachSelectListeners();
          });
          editor.on('click', () => {
            this.attachSelectListeners();
          });
        }
      });
    } catch (error) {
      console.error('Failed to initialize editor:', error);
      alert('Ошибка инициализации редактора');
    }
  }

  insertTemplate() {
    if (!this.isEditorReady) {
      alert('Редактор еще не готов!');
      return;
    }

    try {
      const options = this.templates.map(t => 
        `<option value="${t}">${t}</option>`
      ).join('');
      
      const selectHtml = `<select class="template-select">${options}</select>`;
      
      this.tinymceEditorInstance.insertContent(selectHtml);
      this.attachSelectListeners();
    } catch (error) {
      console.error('Error inserting template:', error);
      alert('Ошибка при вставке шаблона: ' + error.message);
    }
  }

  attachSelectListeners() {
    if (!this.tinymceEditorInstance) return;
  
    const selects = this.tinymceEditorInstance.getBody().querySelectorAll('select.template-select');
    
    selects.forEach(select => {
      if (!select._listenerAttached) {
        select.addEventListener('change', () => {
          const value = select.value;
          if (!this.templates.includes(value)) {
            select.classList.add('error-option');
          } else {
            select.classList.remove('error-option');
          }
        });
  
        select._listenerAttached = true;
      }
    });
  }

  updateAllSelectsAfterRename(oldValue, newValue) {
    if (!this.tinymceEditorInstance) return;
  
    const body = this.tinymceEditorInstance.getBody();
    const selects = body.querySelectorAll('select.template-select');
  
    selects.forEach(select => {
      const currentValue = select.value;
  
      const newSelect = document.createElement('select');
      newSelect.className = 'template-select';
  
      let actualValue = currentValue;
  
      if (currentValue === oldValue) {
        actualValue = newValue;
      }
  
      let options = this.templates.map(t =>
        `<option value="${t}" ${t === actualValue ? 'selected' : ''}>${t}</option>`
      ).join('');
  
      if (!this.templates.includes(actualValue)) {
        options += `<option value="ERROR" selected class="error-option">ERROR</option>`;
      }
  
      newSelect.innerHTML = options;
      select.replaceWith(newSelect);
    });
  
    this.attachSelectListeners();
  }

  updateAllSelects() {
    if (!this.tinymceEditorInstance) return;
  
    try {
      const body = this.tinymceEditorInstance.getBody();
      const selects = body.querySelectorAll('select.template-select');
  
      selects.forEach(oldSelect => {
        const currentValue = oldSelect.value;
  
        const newSelect = document.createElement('select');
        newSelect.className = 'template-select';
  
        let options = this.templates.map(t =>
          `<option value="${t}" ${t === currentValue ? 'selected' : ''}>${t}</option>`
        ).join('');
  
        if (!this.templates.includes(currentValue)) {
          options += `<option value="ERROR" selected class="error-option">ERROR</option>`;
        }
  
        newSelect.innerHTML = options;
        oldSelect.replaceWith(newSelect);
      });
  
      this.attachSelectListeners();
    } catch (error) {
      console.error('Error updating selects:', error);
    }
  }

  render() {
    return html`
      <div class="editor-container">
        <div class="toolbar">
          <button 
            class="insert-button" 
            @click=${this.insertTemplate}
            ?disabled=${!this.isEditorReady}
          >
            ${this.isEditorReady ? 'Insert Template' : 'Loading...'}
          </button>
        </div>
        <tinymce-editor
          api-key="${process.env.TINYMCE_API_KEY}"
        ></tinymce-editor>
      </div>
    `;
  }
}

customElements.define('editor-panel', EditorPanel); 