
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

    const resultTxt = document.getElementById(`resultTxt`);

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
                if(player.turn === true) {
                    player.win = true;
                    resultTxt.textContent = `${player.name} Wins`
                } else {
                    resultTxt.textContent = `CPU Wins`;
                }
                    
                return true;
            }
        }
        return false;
    }

    const resetGame= (gameboard, player) => {
        clearBoard(gameboard, player);
        player.win = false;
        player.turn = true;
        player.gameEnd = false;
        DisplayController.printGrid(gameboard);
    }

    const markCell = (gameboard, player, e) => {
        
        if((e.target.textContent === `` || e.target.textContent === null) && player.gameEnd === false) {
            if(player.turn === true) {
                gameboard.gameArr[e.target.getAttribute(`key`)] = `X`;
            } else {
                gameboard.gameArr[e.target.getAttribute(`key`)] = `O`;
            }
            player.turn = !player.turn;
            DisplayController.printGrid(gameboard);
        }
        

        if(checkWin(gameboard, player) === true) {
        
            DisplayController.printGrid(gameboard);
            player.gameEnd = true;
            
        }

    }
    
    return {clearBoard, checkWin, markCell, resetGame};

})();


const DisplayController = (() => {
    
    const player1 = Player();
    const gameInputs = document.querySelector(`.game-inputs`);
    const userInput = document.getElementById(`username`);
    const startBtn = document.getElementById(`game-button`);
    
    
    startBtn.addEventListener(`click`, () => {
        if(Gameboard.boardDiv.style.display === ``) {
            player1.name = userInput.value;
            Gameboard.boardDiv.style.display = `grid`; 
            gameInputs.style.display = `none`;
        } 
    })

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


function Player(userName = ``) {
    let win = false;
    let name = userName;
    let turn = true;
    let gameEnd = false;
    return {win, name, turn, gameEnd};
}


