/// <reference path="person.ts" />
/// <reference path="player.ts" />
/// <reference path="result.ts" />

function startGame(): void {
    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);

    let scores: number[] = [70, 125, 85, 110];
    let highScores: number[]; // array with numbers bigger than 100

    highScores = scores.filter((elem, index, array) => {
        console.log("filter:" + array);
        if (elem > 100) {
            return true;
        }
    })

    console.log("Highscores:" + highScores);

    /*
    let messagesElem = document.getElementById("messages");
    messagesElem!.innerText = "Welcome to Multimath! Starting new game...";

    let x: string = "I am a string forever";
    //x = 56; // error

    let y = "I am a string forever";  // type inference
    //y = 56; // error

    const z = getSomeNumber();
    //z = 123; // error 

    console.log(`Hello world ${z}`);

    let isValid : Boolean = true;
    isValid = false;

    //x = null;  // null is not allowed
    let abc : string | null; // union type
    
    abc = "abc";
    if (abc === null)  // abc: string  control flow-based type analysis 
    {
        console.log(abc);  //abc: never
    }
    else
    {
        console.log(abc);        
    }
    abc = null;
    // abc = undefined; // only null is allowed

    let val: any = 55;
    //let fixedString: string = (<number>val).toFixed(4);
    let fixedString: string = (val as number).toFixed(4);
    console.log('fixed string:' + fixedString);
    */
}

function logPlayer(name: string = 'Multimath Player'): void {
    console.log(`Player: ${name}`);
}
/*
function getSomeNumber() : number {
    return 5;
}
*/

function postScore(score: number, playerName?: string): void {
    let logger: (val: string) => void;

    let scoreElem: HTMLElement | null = document.getElementById('postedScores');
    scoreElem!.innerText = `${score} - ${playerName}`;

    if(score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    logger(`Score: ${score}`);
}

function getInputValue(elementId: string): string | undefined {
    let inputElem : HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElem.value === '') {
        return undefined;
    }
    else {
        return inputElem.value;
    }
}


document.getElementById('startGame')!.addEventListener('click', startGame);

let logMessage = (message: string) => console.log(message);

function logError(message: string, priority: number = 1): void {
    console.error(message);
}

let gameResult : Result = {
    playerName: "Sergio",
    score: 100,
    problemCount: 5,
    factor: 10
}

let person = {
    name: "Ioana",
    formatName: () => "Jo"
}

let p: Person = new Player();
p.name = "Chinedu";
p.age = 20;
console.log(p.formatName());