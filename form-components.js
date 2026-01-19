class FormInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const label = this.getAttribute('label') || '';
    const type = this.getAttribute('type') || 'text';
    const name = this.getAttribute('name') || '';
    const placeholder = this.getAttribute('placeholder') || '';

    this.shadowRoot.innerHTML = `
      <style>
        .form-group { margin-bottom: 1rem; font-family: sans-serif; }
        label { display: block; margin-bottom: 0.5rem; font-weight: bold; }
        input { 
          width: 100%; padding: 10px; border: 1px solid #ccc; 
          border-radius: 4px; box-sizing: border-box;
        }
      </style>
      <div class="form-group">
        <label>${label}</label>
        <input type="${type}" name="${name}" placeholder="${placeholder}">
      </div>
    `;
  }

  // Helper to get the actual value from the shadow DOM
  get value() {
    return this.shadowRoot.querySelector('input').value;
  }
}

customElements.define('form-input', FormInput);
