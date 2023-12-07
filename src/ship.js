function ship(n, shipLen) {
    let name = n;
    let len = shipLen;
    let hits = 0;
    function hit() {
        if (!isSunk())
            hits++;
    }
    function isSunk() {
        return hits >= len;
    }
    return {
        name,
        hit,
        len,
        isSunk
    }
}
module.exports = ship;