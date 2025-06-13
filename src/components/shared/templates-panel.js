import { LitElement, html, css } from 'lit';

export class TemplatesPanel extends LitElement {
  static properties = {
    templates: { type: Array },
    selectedTemplate: { type: String },
    editTemplate: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    .templates-panel {
      flex: 1;
      padding: 24px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: calc(100vh - 48px);
      box-sizing: border-box;
      overflow: hidden;
      min-width: 300px;
    }

    .templates-panel h3 {
      margin: 0;
      color: #212529;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .template-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .template-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px;
      background: #f8f9fa;
      border: 1px solid #e9ecef;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .template-item:hover {
      background: #e9ecef;
      transform: translateY(2px);
    }

    .template-item.selected {
      background: #e7f5ff;
      border-color: #74c0fc;
    }

    .template-controls {
      display: flex;
      gap: 8px;
    }

    .template-controls button {
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      background: #e9ecef;
      color: #495057;
    }

    .template-controls button:hover {
      background: #dee2e6;
    }

    .edit-template {
      margin-top: auto;
      padding-top: 16px;
      border-top: 1px solid #e9ecef;
      width: 100%;
      box-sizing: border-box;
    }

    .edit-template label {
      display: block;
      margin-bottom: 8px;
      color: #495057;
      font-weight: 500;
    }

    .edit-template input {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ced4da;
      border-radius: 6px;
      font-size: 0.9rem;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .edit-template input:focus {
      outline: none;
      border-color: #74c0fc;
      box-shadow: 0 0 0 3px rgba(116, 192, 252, 0.2);
    }

    .add-template-button {
      width: 100%;
      height: 100%;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      color: #495057;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-template-button:hover {
      color: #4361ee;
      transform: translateY(2px);
    }

    @media (max-width: 768px) {
      .templates-panel {
        height: auto;
        min-height: 50vh;
        min-width: auto;
      }

      .template-item {
        padding: 8px;
      }

      .template-controls button {
        padding: 4px 8px;
      }
    }

    @media (max-width: 480px) {
      .templates-panel {
        padding: 12px;
      }

      .template-item {
        font-size: 0.9rem;
      }

      .edit-template input {
        font-size: 0.85rem;
        padding: 8px 10px;
      }
    }
  `;

  constructor() {
    super();
    this.templates = [];
    this.selectedTemplate = '';
    this.editTemplate = '';
  }

  addTemplate() {
    let newTemplateNumber = this.templates.length + 1;
    let newTemplate = `template ${newTemplateNumber}`;
    
    while (this.templates.includes(newTemplate)) {
      newTemplateNumber++;
      newTemplate = `template ${newTemplateNumber}`;
    }
    
    this.templates = [...this.templates, newTemplate];
    this.selectTemplate(newTemplate);
    this.dispatchEvent(new CustomEvent('templates-updated', {
      detail: { templates: this.templates }
    }));
  }

  removeTemplate(template) {
    if (this.templates.length <= 1) {
      alert('Нельзя удалить последний шаблон');
      return;
    }

    if (!confirm(`Вы уверены, что хотите удалить шаблон "${template}"?`)) {
      return;
    }

    this.templates = this.templates.filter(t => t !== template);
    if (this.selectedTemplate === template) {
      this.selectedTemplate = '';
      this.editTemplate = '';
    }
    this.dispatchEvent(new CustomEvent('templates-updated', {
      detail: { templates: this.templates }
    }));
  }

  selectTemplate(template) {
    this.selectedTemplate = template;
    this.editTemplate = template;
  }

  updateTemplate(e) {
    if (e.key === 'Enter' || e.type === 'blur') {
      const oldTemplate = this.selectedTemplate.trim();
      const newTemplate = this.editTemplate.trim();
  
      if (!newTemplate || oldTemplate === newTemplate) return;
  
      if (this.templates.includes(newTemplate) && newTemplate !== oldTemplate) {
        alert('Шаблон с таким именем уже существует');
        return;
      }
  
      const index = this.templates.indexOf(oldTemplate);
      if (index !== -1) {
        this.templates[index] = newTemplate;
        this.templates = [...this.templates];
        this.selectedTemplate = newTemplate;
        this.editTemplate = newTemplate;
  
        this.dispatchEvent(new CustomEvent('template-renamed', {
          detail: { oldValue: oldTemplate, newValue: newTemplate }
        }));
      }
    }
  }

  render() {
    return html`
      <div class="templates-panel">
        <h3>Templates</h3>
        <ul class="template-list">
          ${this.templates.map(template => html`
            <li class="template-item ${this.selectedTemplate === template ? 'selected' : ''}"
                @click=${() => this.selectTemplate(template)}>
              <span>${template}</span>
              <div class="template-controls">
                <button @click=${(e) => { e.stopPropagation(); this.removeTemplate(template); }}>-</button>
              </div>
            </li>
          `)}
          <li class="template-item">
            <button class="add-template-button" @click=${this.addTemplate}>+</button>
          </li>
        </ul>
        <div class="edit-template">
          <label>Edit template:</label>
          <input 
            type="text" 
            .value=${this.editTemplate}
            @input=${(e) => this.editTemplate = e.target.value}
            @keyup=${this.updateTemplate}
            @blur=${this.updateTemplate}
            placeholder="Enter template name"
          >
        </div>
      </div>
    `;
  }
}

customElements.define('templates-panel', TemplatesPanel); 