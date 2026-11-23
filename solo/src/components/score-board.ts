export class ScoreBoard extends HTMLElement {

    static readonly observedAttributes = ['value', 'label'] as const

    get value(): number {
        return Number(this.getAttribute('value') ?? 0)
    }

    set value(value: number) {
        this.setAttribute('value', String(value))
    }

    attributeChangedCallback(name: string, _old: string | null) {
        if (name === 'value') this.render()
        if (name === 'label') this.render()
    }

    private render() {
        const label = this.getAttribute('label') ?? 'Score'
        const value = this.value
        this.textContent = `${label} : ${value}`
    }
}