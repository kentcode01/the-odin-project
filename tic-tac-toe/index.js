
const Gameboard = ((player) => {
    
    const gameArr = [``, ``, ``, ``, ``, ``, ``, ``, ``];
    const boardDiv = document.getElementById(`game-board`);
    const createGrid = (player) => {
        const cells = document.getElementsByClassName(`cell`);
        for(let i = 0; i < 9; i++) {
            cells[i].addEventListener(`click`, (e) => GameController.markCell(Gameboard, player, e));
        }
        return boardDiv;
    }    

    return {gameArr, boardDiv, createGrid};

})();


const GameController = ((gameboard, player) => {


    const clearBoard = (gameboard) => {
        for(let i = 0; i < gameboard.gameArr.length; i++) {
            gameboard.gameArr[i] = ``;
        }
    }

    const checkWin = (gameboard, player) => {
        const sets = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for(let i = 0; i < sets.length; i++) {
            let arr = sets[i];
    
            if(gameboard.gameArr[arr[0]] && gameboard.gameArr[arr[0]] === gameboard.gameArr[arr[1]] && gameboard.gameArr[arr[1]] === gameboard.gameArr[arr[2]]) {
                if(player.turn === true) player.win = true;
                return true;
            }
        }
        return false;
    }

    const resetGame= (gameboard, player) => {
        clearBoard(gameboard, player);
        player.win = false;
        player.turn = true;
        DisplayController.printGrid(gameboard);
    }

    const markCell = (gameboard, player, e) => {
    
        if(checkWin(gameboard, player) === true) {
        
            DisplayController.printGrid(gameboard);
            resetGame(gameboard, player);
        } else {
            if(e.target.textContent === `` || e.target.textContent === null) {
                if(player.turn === true) {
                    gameboard.gameArr[e.target.getAttribute(`key`)] = `X`;
                } else {
                    gameboard.gameArr[e.target.getAttribute(`key`)] = `O`;
                }
                player.turn = !player.turn;
                DisplayController.printGrid(gameboard);
            }
        }

    }
    
    return {clearBoard, checkWin, markCell, resetGame};

})();


const DisplayController = (() => {
    
    let player1 = new Player(`John`);
    Gameboard.createGrid(player1);

    const printGrid = (gameboard) => {
        let i = 0;
        for (const cell of gameboard.boardDiv.children) {
            cell.textContent = gameboard.gameArr[i];
            i++;
        }
    }

    return {printGrid};

})();


function Player(userName) {
    let win = false;
    let name = userName;
    let turn = true;
    return {win, name, turn};
}


