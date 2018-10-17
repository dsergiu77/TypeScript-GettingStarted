var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    Player.logFavoriteProtocol = function () {
        console.log("HTTPS, of course");
    };
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    Player.prototype.logGender = function () {
        console.log("Gender: " + Player.gender);
    };
    Player.gender = true;
    return Player;
}());
var Util = (function () {
    function Util() {
    }
    Util.getInputValue = function (elementId) {
        var inputElem = document.getElementById(elementId);
        return inputElem.value;
    };
    return Util;
}());
var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard</h2>';
        this.results.forEach(function (result, i, array) {
            output += '<h4>';
            output += result.playerName + ":" + result.score + "/" + result.problemCount;
            output += '</h4>';
        });
        var scoresElem = document.getElementById('scores');
        scoresElem.innerHTML = output;
    };
    return Scoreboard;
}());
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class = "form-group">';
            gameForm += '<label for="answer' + i + '" class= "col-sm-2 control-label">';
            gameForm += this.factor.toString() + ' x ' + i + ' = </label>';
            gameForm += '<div class = "col-sm-1"><input type="number" class="form-control" id="answer' + i + '"></div>';
            gameForm += '</div>';
        }
        var gameElem = document.getElementById('game');
        gameElem.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(Util.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new Player(Util.getInputValue('playername'));
    var problemCount = Number(Util.getInputValue('problemCount'));
    var factor = Number(Util.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map