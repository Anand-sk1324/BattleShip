const ship = require('./ship');
const water = require('./water');
function gameBoard() {
    let carrier = ship('carrier', 5);
    let battleShip = ship('battleShip', 4);
    let destroyer = ship('destroyer', 3);
    let submarine = ship('submarine', 2);
    let patrolBoat = ship('patrolBoat', 2);

    let ships = [carrier, battleShip, destroyer, submarine, patrolBoat];

    let board = Array.from({ length: 10 }).map(() => Array.from({ length: 10 }).fill([water, 'u']));
    let unselectedGrid = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            unselectedGrid.push([i, j]);
        }
    }

    function randomisePlacement() {
        ships.forEach((s) => {
            let x = 0;
            let y = 0;
            let isH = Math.random() >= 0.5;
            while (true) {
                isH = Math.random() >= 0.5;
                let isvalid = true;
                if (isH == true) {
                    x = Math.floor(Math.random() * (10));
                    y = Math.floor(Math.random() * (10 - s.len));

                    for (let i = 0; i <= s.len; i++) {
                        if (board[x][y + i][0].name != "water") isvalid = false
                    }
                    if (!isvalid) continue; else break;
                }
                else {
                    x = Math.floor(Math.random() * (10 - s.len));
                    y = Math.floor(Math.random() * (10));
                    for (let i = 0; i < s.len; i++) {
                        if (board[x + i][y][0].name != "water") isvalid = false
                    }
                    if (!isvalid) continue; else break;
                }
            }

            placeShip(x, y, isH, s);
        });
    }
    function placeShip(x, y, isHorizontal, ship) {
        if (isHorizontal) {
            for (let i = 0; i < ship.len; i++) {
                board[x][y + i] = [ship, 'u'];
            }
        }

        else {
            for (let i = 0; i < ship.len; i++) {
                board[x + i][y] = [ship, 'u'];
            }
        }
    }
    function isValidMove(x, y) {
        return board[x][y][1] === 'u';
    }
    function receiveAttack(x, y) {
        let grid = board[x][y]
        if (grid[1] === 'r') return "revealed";
        board[x][y][1] = 'r';

        if (grid[0].name == 'water') {
            return "missed";
        }
        grid[0].hit();
        if (isAllShipSunk()) {
            // report game over
        }
        return "attacked";
    }
    function isAllShipSunk() {
        for (let i = 0; i < ships.length; i++) {
            if (!ships[i].isSunk()) return false;
        }
        return true;
    }
    return {
        placeShip,
        isValidMove,
        receiveAttack,
        isAllShipSunk,
        randomisePlacement,
        ships,
        board,
        unselectedGrid
    }
}
module.exports = gameBoard;