const ship = require('./ship');

test("Not sunk", () => {
    let curShip = ship(3); 
    expect(curShip.isSunk()).not.toBeTruthy();
});

test("Sunk", () => {
    let curShip = ship(3); 
    curShip.hit();
    curShip.hit();
    curShip.hit();
    expect(curShip.isSunk()).toBeTruthy();
});

test("Also Sunk", () => {
    let curShip = ship(3); 
    curShip.hit();
    curShip.hit();
    curShip.hit();
    curShip.hit();
    expect(curShip.isSunk()).toBeTruthy();
});
