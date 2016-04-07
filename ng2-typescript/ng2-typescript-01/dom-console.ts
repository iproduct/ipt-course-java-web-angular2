export class DomConsole {
    private domElement: HTMLElement;
    constructor(elementId: string) {
        this.domElement = document.getElementById(elementId);
    }
    log(...args: any[]) {
        args.forEach(value => this.domElement.innerHTML += "" + value);
        this.domElement.innerHTML += "<br>";
    }
}
