function ship(s){
    let size = s;
    let maxHits = s;

    const hit = () => {
        maxHits--;
        return maxHits;
    }

    const isSunk = () => {
        return maxHits === 0;
    }

    return {
        size,
        hit,
        isSunk
    };
}

module.exports = ship;