const gameBoard = require('./gameBoard');

test("Already GameOver?", () => {
    expect(gameBoard().isAllShipSunk()).not.toBeTruthy();
});

test("Ship Attacked!", () => {
    let gb = gameBoard();
    gb.placeShip(1, 2, true, gb.ships[0]);
    expect(gb.receiveAttack(1, 2)).toMatch("attacked");
});

test("Ship Cell Already Attacked!", () => {
    let gb = gameBoard();
    gb.placeShip(1, 2, true, gb.ships[0]);
    gb.receiveAttack(1, 2)
    expect(gb.receiveAttack(1, 2)).toMatch("revealed");
});

test("Attack Missed", () => {
    let gb = gameBoard();
    gb.placeShip(1, 2, true, gb.ships[0]);
    gb.receiveAttack(1, 2)
    expect(gb.receiveAttack(2, 3)).toMatch("missed");
});