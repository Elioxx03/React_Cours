export class XTimer extends HTMLElement {

    private seconds = 0
    private intervalId: ReturnType<typeof setInterval> | null = null //Permet d'arreter le chrono

    connectedCallback() {
        this.render()
    }

    disconnectedCallback() {
        this.stop()
    }

    start() {
        if (this.intervalId !== null) return //surveillance de si chrono tourne deja

        this.intervalId = setInterval(() => { 
            this.seconds++
            this.render()
        }, 1000)
    }

    stop() {
        if (this.intervalId === null) return

        clearInterval(this.intervalId)
        this.intervalId = null
    }

    reset() {
        this.stop()
        this.seconds = 0
        this.render()
    }

    private render() { //aide de l'ia pour le render pour les convertions
        const minutes = Math.floor(this.seconds / 60)
        const seconds = this.seconds % 60

        this.textContent = //Mets a jour le contenue 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}` //padStart ajout d un 0 si chaine < 2 char
    }
}

customElements.define('x-timer', XTimer)