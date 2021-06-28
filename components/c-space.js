export default class CSpace extends HTMLElement {
	static get observedAttributes() {
		return ['id', 'width', 'height', 'color']
	}

	constructor() {
		super()
		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.innerHTML = `
    <div id="${this.id}" style="display:inline-block;width:${this.width};height:${this.height};color:${this.color}"></div>
    `
	}

	get id() {
		return this.getAttribute('id') || ''
	}

	get width() {
		return this.getAttribute('width') || '10px'
	}

	get height() {
		return this.getAttribute('height') || '10px'
	}

	get color() {
		return this.getAttribute('color') || '#fff'
	}
}

if (!customElements.get('c-space')) {
	customElements.define('c-space', CSpace)
}
