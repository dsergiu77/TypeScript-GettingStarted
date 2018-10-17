/// <reference path="person.ts" />

class Player implements Person {
    constructor(public name: string) {
    }

    age: number;
    highscore: number;
    static gender: boolean = true;

    static logFavoriteProtocol() {
        console.log("HTTPS, of course");
    }

    formatName() {
       return this.name.toUpperCase();
    }

    logGender(): void {
        console.log("Gender: " + Player.gender);
    }
}