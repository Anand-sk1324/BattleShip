function ship(s){
    let size = s;
    let maxHits = s;
    let coords = []

    const putCoords = (allCoords) => {
        coords = allCoords;
    }
    const getCoords = () => {
        return coords;
    }
    const hit = (i) => {
        coords.splice(i,i+1)
        maxHits--;
        return coords;
    }

    const isSunk = () => {
        return maxHits === 0;
    }

    return {
        hit,
        isSunk,
        putCoords,
        getCoords
    };
}

module.exports = ship;