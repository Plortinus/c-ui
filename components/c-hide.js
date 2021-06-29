export default class CHide extends HTMLElement {
	static get observedAttributes() {
		return ['id', 'name', 'value', 'errUrl', 'successUrl', 'failUrl']
	}

	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.innerHTML = `
    <input id="${this.id}" name="${this.name}" type="hidden" value="${this.value}">
    `
	}

	get id() {
		return this.getAttribute('id') || ''
	}

  get name() {
		return this.getAttribute('name') || ''
	}

	get value() {
		return this.getAttribute('value') || ''
	}

	get errUrl() {
		return this.getAttribute('errUrl') || '/#'
	}

	get successUrl() {
		return this.getAttribute('successUrl') || '/#'
	}

	get failUrl() {
		return this.getAttribute('failUrl') || '/#'
	}

}

if (!customElements.get('c-hide')) {
	customElements.define('c-hide', CHide)
}
