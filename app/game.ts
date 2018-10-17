/// <reference path="util.ts" />
/// <reference path="result.ts" />
/// <reference path="scoreboard.ts" />
/// <reference path="player.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {
    }

    displayGame(): void {
        //create the html for the current game
        let gameForm: string = '';
        for(let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class = "form-group">';
            gameForm += '<label for="answer' + i + '" class= "col-sm-2 control-label">';
            gameForm += this.factor.toString() + ' x ' + i + ' = </label>';
            gameForm += '<div class = "col-sm-1"><input type="number" class="form-control" id="answer' + i + '"></div>';
            gameForm += '</div>';
        }

        // add the new game to the page
        let gameElem: HTMLElement | null = document.getElementById('game');
        gameElem!.innerHTML = gameForm;

        // enable the Calculate Score button
        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {
        let score: number = 0;

        // loop through the textboxes and calculate the numbers that are correct
        for(let i = 1; i <= this.problemCount; i++) {
            let answer: number = Number(Util.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }

        // create a new Result object to pass to the scoreboard
        let result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        // disable the Calculate Scoreboard button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');   
    }
}




