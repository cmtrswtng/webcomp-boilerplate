import { LitElement, html, css } from 'lit';
import './editor-panel.js';
import './templates-panel.js';

export class EditorComponent extends LitElement {
  static properties = {
    templates: { type: Array }
  };

  static styles = css`
    :host {
      display: flex;
      height: 100vh;
      padding: 24px;
      gap: 24px;
      background: #f8f9fa;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      box-sizing: border-box;
      overflow: hidden;
    }

    @media (max-width: 1024px) {
      :host {
        padding: 16px;
        gap: 16px;
      }
    }

    @media (max-width: 768px) {
      :host {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
        padding: 12px;
        gap: 12px;
      }
    }

    @media (max-width: 480px) {
      :host {
        padding: 8px;
        gap: 8px;
      }
    }
  `;

  constructor() {
    super();
    this.templates = ['template 1', 'template 2', 'template 3'];
  }

  handleTemplatesUpdated(e) {
    this.templates = e.detail.templates;
    const editorPanel = this.shadowRoot.querySelector('editor-panel');
    if (editorPanel) {
      editorPanel.templates = this.templates;
      editorPanel.updateAllSelects();
    }
  }

  handleTemplateRenamed(e) {
    const { oldValue, newValue } = e.detail;
    const editorPanel = this.shadowRoot.querySelector('editor-panel');
    if (editorPanel) {
      editorPanel.updateAllSelectsAfterRename(oldValue, newValue);
    }
  }

  render() {
    return html`
      <editor-panel
        .templates=${this.templates}
      ></editor-panel>
      <templates-panel
        .templates=${this.templates}
        @templates-updated=${this.handleTemplatesUpdated}
        @template-renamed=${this.handleTemplateRenamed}
      ></templates-panel>
    `;
  }
}

customElements.define('editor-component', EditorComponent);
