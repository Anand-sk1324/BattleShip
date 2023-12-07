import './style.css';
const player = require('./player');

let p1GUI = document.querySelector('.player');
let cpuGUI = document.querySelector('.cpu');

const p1 = player();
p1.board.randomisePlacement();

const cpu = player();
cpu.board.randomisePlacement();

let isP1Turn = true;

p1BoardInitiation();
cpuBoardInitiation();

function p1BoardInitiation() {
    let p1Board = p1GUI.querySelector('.board');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            grid.classList.add('hidden');
            grid.classList.add(p1.board.board[i][j][0].name);
            p1Board.appendChild(grid);
        }
    }
}
function cpuBoardInitiation() {
    let cpuBoard = cpuGUI.querySelector('.board');
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            grid.classList.add('hidden');
            grid.classList.add(cpu.board.board[i][j][0].name);

            grid.addEventListener("click", () => {
                if (grid.classList.contains('hidden')) {
                    let Idx = Array.from(grid.parentNode.children).indexOf(grid);
                    let x = Math.floor(Idx / 10);
                    let y = (Idx % 10);
                    console.log(Idx, x, y);

                    p1.attack(cpu, x, y);
                    if (cpu.board.isAllShipSunk()) {
                        alert("player won")
                    }
                    enemyMove();
                    if (p1.board.isAllShipSunk()) {
                        alert("cpu won")
                    }
                }
                grid.classList.remove('hidden');
            });
            cpuBoard.appendChild(grid);
        }
    }
}

function enemyMove() {
    let idx = cpu.randomMove(p1);
    p1GUI.querySelector('.board').children[idx].classList.remove('hidden');
}