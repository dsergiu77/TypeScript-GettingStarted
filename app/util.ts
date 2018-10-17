class Util {
    static getInputValue(elementId: string): string {
        let inputElem : HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
        return inputElem.value;
    }
}