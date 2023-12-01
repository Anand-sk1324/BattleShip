const gameBoard = require("./gameBoard");

test("Attack Missed", () => {
    gb = gameBoard(4);
    gb.placeShip(1, 3, 1);
    gb.placeShip(2, 5, 1)
    gb.placeShip(2, 4, 1)
    expect(gb.receiveAttack(2, 3)).not.toBeTruthy();
});

test("Attack Received", () => {
    gb = gameBoard(4);
    gb.placeShip(2, 3, 1)
    gb.placeShip(2, 4, 1)
    expect(gb.receiveAttack(2, 3)).toBeTruthy();
});
test("Can't Attack Twice", () => {
    gb = gameBoard(4);
    gb.placeShip(2, 3, 1)
    gb.receiveAttack(2, 3)
    expect(gb.shipsCoords()).toEqual([[]])
    expect(gb.receiveAttack(2, 3)).not.toBeTruthy();
});
// !remove this after complete the placing logic
test("One Ship Placed Successfully", () => {
    gb = gameBoard(4);
    expect(gb.placeShip(2, 3, 1)).toEqual([[[2, 3]]]);
});

test("Multiple Ship Placed Successfully", () => {
    gb = gameBoard(4);
    gb.placeShip(2, 3, 1)
    gb.placeShip(3, 4, 1)
    expect(gb.placeShip(1, 3, 1)).toEqual([[[2,3]],[[3,4]],[[1,3]]]);
});