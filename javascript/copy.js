customElements.define('mo-copy', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
        }
        ::slotted(input), ::slotted(textarea) {
          cursor: pointer;
        }
        .tooltip {
          display: none;
          position: absolute;
          top: 5px;
          right: 5px;
          background: var(--color-blue);
          color: var(--color-white);
          padding: 0.5em;
          border-radius: var(--border-radius);
          font: var(--font-xsmall);
          z-index: 1;
          animation: show var(--duration);
        }
        @keyframes show {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      </style>
      <div class="tooltip">Copied!</div>
      <slot></slot>
    `;
  }
  connectedCallback() {
    const input = this.querySelector('input,textarea');

    input.addEventListener('click', async () => {
      const text = input.value;
      input.select();
      await navigator.clipboard.writeText(text);
      this.shadowRoot.querySelector('.tooltip').style.display = 'block';
      setTimeout(() => {
        this.shadowRoot.querySelector('.tooltip').style.display = 'none';
      }, 1000);
    });
  }
});
