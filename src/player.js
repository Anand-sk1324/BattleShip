const gameBoard = require('./gameBoard');
function player() {
    const board = gameBoard();

    function randomMove(enemy) {
        let options = enemy.board.unselectedGrid;
        let randIdx = Math.floor(Math.random() * options.length);
        let x = options[randIdx][0];
        let y = options[randIdx][1];
        console.log(randIdx, options.splice(randIdx, 1));
        enemy.board.receiveAttack(x, y);
        return x * 10 + y;
    }
    function attack(enemy, x, y) {
        enemy.board.receiveAttack(x, y);
    }
    return {
        board,
        attack,
        randomMove
    }
}
module.exports = player;