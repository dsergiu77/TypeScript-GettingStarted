var Player = (function () {
    function Player() {
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
function startGame() {
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
    var scores = [70, 125, 85, 110];
    var highScores;
    highScores = scores.filter(function (elem, index, array) {
        console.log("filter:" + array);
        if (elem > 100) {
            return true;
        }
    });
    console.log("Highscores:" + highScores);
}
function logPlayer(name) {
    if (name === void 0) { name = 'Multimath Player'; }
    console.log("Player: " + name);
}
function postScore(score, playerName) {
    var logger;
    var scoreElem = document.getElementById('postedScores');
    scoreElem.innerText = score + " - " + playerName;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    logger("Score: " + score);
}
function getInputValue(elementId) {
    var inputElem = document.getElementById(elementId);
    if (inputElem.value === '') {
        return undefined;
    }
    else {
        return inputElem.value;
    }
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
function logError(message, priority) {
    if (priority === void 0) { priority = 1; }
    console.error(message);
}
var gameResult = {
    playerName: "Sergio",
    score: 100,
    problemCount: 5,
    factor: 10
};
var person = {
    name: "Ioana",
    formatName: function () { return "Jo"; }
};
var p = new Player();
p.name = "Chinedu";
p.age = 20;
console.log(p.formatName());
//# sourceMappingURL=app.js.map