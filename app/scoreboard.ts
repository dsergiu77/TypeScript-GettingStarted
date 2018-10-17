/// <reference path="result.ts" />

class Scoreboard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        // loop over all results and create the html for the scoreboard
        this.results.forEach((result, i, array) => {
            output += '<h4>';
            output += result.playerName + ":" + result.score + "/" + result.problemCount;
            output += '</h4>';
        });

        // add the updated scoreboard to the page
        let scoresElem: HTMLElement | null = document.getElementById('scores');
        scoresElem!.innerHTML = output;
    }
}