const ship = require('./ship');
function gameBoard(boardSize){
    let size = boardSize;
    let ships = [];
    function shipsCoords(){
        return ships.map((s) => s.getCoords());
    }
    function placeShip(x, y, shipSize){
        var curShip = ship(shipSize);

        curShip.putCoords([[x,y]]);
        ships.push(curShip);

        return ships.map((s) => s.getCoords());
    }
    function receiveAttack(x, y){
        for(var i = 0; i < ships.length; i++){
            let curShip = ships[i];
            let curCoords = curShip.getCoords();
            for(var j = 0; j < curCoords.length; j++){
                let curCoord = curCoords[j];
                if(curCoord[0] === x && curCoord[1] === y){
                    curShip.hit(j);
                    return true
                }
            }
        }
        return false;
    }
    return {
        placeShip: placeShip,
        receiveAttack: receiveAttack,
        shipsCoords
    }
}
module.exports = gameBoard;