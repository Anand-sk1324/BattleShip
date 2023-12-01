const ship = require("./ship");

test("the ship been hitted", () => {
    let a = ship(3)
    expect(a.hit()).toBe(2);
});

test("the ship been destroyed", () => {
    let b = ship(3)
    b.hit()
    expect(b.isSunk()).not.toBeTruthy()
    b.hit()
    b.hit()
    expect(b.isSunk()).toBeTruthy();
});