
const Gameboard = (() => {
    
    const gameArr = [``, ``, ``, ``, ``, ``, ``, ``, ``];
    const boardDiv = document.getElementById(`game-board`);
    const createGrid = () => {
        const cells = document.getElementsByClassName(`cell`);
        for(let i = 0; i < 9; i++) {
            cells[i].addEventListener(`click`, (e) => GameController.markCell(e));
        }
        return boardDiv;
    }    

    return {gameArr, boardDiv, createGrid};

})();


const GameController = (() => {
    let turn = 0;
    const resultTxt = document.getElementById(`result-text`);
    const endOption = document.querySelector(`.end-option`);
    const refreshBtn = document.querySelector(`#refresh-button`);

    refreshBtn.addEventListener(`click`, () => {
        resetGame()
    });

    const clearBoard = (gameArr) => {
        for(let i = 0; i < Gameboard.gameArr.length; i++) {
            gameArr[i] = ``;
        }
    }

    const checkWin = (gameArr) => {
        if(Player.gameEnd === true) return false;
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
    
            if(gameArr[arr[0]] && gameArr[arr[0]] === gameArr[arr[1]] && gameArr[arr[1]] === gameArr[arr[2]]) {
                if(Player.turn === true) {
                    Player.win = true;
                    resultTxt.textContent = `- ${Player.name} Wins -`
                } else {
                    resultTxt.textContent = `- CPU Wins -`;
                }
                Player.gameEnd = true;
                return true;
            }
        }
        if(turn === gameArr.length) {
            resultTxt.textContent = `- Tie Game -`;
        }
            
        return false;
    }

    const resetGame = () => {
        clearBoard(Gameboard.gameArr);
        Player.win = false;
        Player.turn = true;
        Player.gameEnd = false;
        turn = 0;
        endOption.style.display = ``;
        DisplayController.printGrid();
    }

    const markCell = (e) => {
        if((e.target.textContent === `` || e.target.textContent === null) && Player.gameEnd === false) {
            if(Player.turn === true) {
                Gameboard.gameArr[e.target.getAttribute(`key`)] = `X`;
            } else {
                Gameboard.gameArr[e.target.getAttribute(`key`)] = `O`;
            }
            Player.turn = !Player.turn;
            turn = turn + 1;
            DisplayController.printGrid();
        }
        
        if(checkWin(Gameboard.gameArr) === true) {
            DisplayController.printGrid();
            Player.gameEnd = true;
            endOption.style.display = `flex`;
        } else if(checkWin(Gameboard.gameArr) === false && turn === Gameboard.gameArr.length) {
            endOption.style.display = `flex`;
        }
    }

    return {clearBoard, checkWin, markCell, resetGame};

})();


const DisplayController = (() => {
    const gameInputs = document.querySelector(`.game-inputs`);
    const userInput = document.getElementById(`username`);
    const startBtn = document.getElementById(`game-button`);
    
    startBtn.addEventListener(`click`, () => {
        if(Gameboard.boardDiv.style.display === `` && userInput.value != ``) {
            Player.name = userInput.value;
            Gameboard.boardDiv.style.display = `grid`; 
            gameInputs.style.display = `none`;
        } 
    })

    Gameboard.createGrid();

    const printGrid = () => {
        let i = 0;
        for (const cell of Gameboard.boardDiv.children) {
            cell.textContent = Gameboard.gameArr[i];
            i++;
        }
    }

    return {printGrid};

})();


const Player = (() => {
    let win = false;
    let name = ``;
    let turn = true;
    let gameEnd = false;
    return {win, name, turn, gameEnd};
})();


