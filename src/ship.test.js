const ship = require("./ship");

test("the ship been hitted", () => {
    let a = ship(3)
    a.putCoords([[1, 2]]);
    expect(a.hit(0)).toEqual([]);
});

test("the ship been destroyed", () => {
    let b = ship(3)
    b.hit()
    expect(b.isSunk()).not.toBeTruthy()
    b.hit()
    b.hit()
    expect(b.isSunk()).toBeTruthy();
});