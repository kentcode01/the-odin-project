const Gameboard = (function() {
    const game = [``, ``, ``, ``, ``, ``, ``, ``, ``];

    const printGrid = () => {
        let gameString = ``;
        console.log(`GAME BOARD`)
        console.log(game.length);
        for(let i = 0; i < game.length; i++) {
            gameString += (game[i] + `|`);
            if((i + 1) % 3 === 0) {
                gameString += `\n`;
            }
        }
        console.log(gameString);
        return gameString;
    }

    return {game, printGrid};

})();

const Controller = (function(gameboard, player1, player2) {
    const clearBoard = (gameboard) => {
        for(let i = 0; i < gameboard.length; i++) {
            gameboard[i] = ``;
        }
        return gameboard;
    };

    const checkWin = (gameboard) => {
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
    
            if(gameboard[arr[0]] && gameboard[arr[0]] === gameboard[arr[1]] && gameboard[arr[1]] === gameboard[arr[2]]) {
                return true;
            }
        }
        Gameboard.printGrid();
        return false;
    }

    const playGame = (gameboard) => {
        let player = true;
    
        let turns = 1;
    
        while(turns < 10 || checkWin(gameboard) === true) {
            console.log(`Turn ${turns}`)
            let option = prompt(`user choice: `);
            if(option === `Q`) {
                clearBoard(gameboard);
                return;
            }
            if(gameboard[option] === ``) {
                if(player === true) {
                    gameboard[option] = `X`;
                } else {
                    gameboard[option] = `O`;
                }
                turns++;
                player = !player;
            }
            if(checkWin(gameboard) === true) {
                Gameboard.printGrid();
                {player? console.log(`Player Wins`) : console.log(`CPU Wins`)};
                clearBoard(gameboard);
                return;
            }
        }   
        console.log(`Tie Game`);
        return;

        
    }
    return {clearBoard, checkWin, playGame};
})();

function Player() {
    let win = false;
    let name = ``;
}

const board = Gameboard;
const controller = Controller;
controller.playGame(board.game);