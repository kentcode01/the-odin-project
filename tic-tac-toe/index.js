// let game = [`X`, `O`, `X`, `X`, `X`, `O`, `O`, `X`, `X`];


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
    }

    return {printGrid};

})();

const Controller = (function(gameboard, player1, player2) {
    const clearBoard = () => {
        for(let i = 0; i < game.length; i++) {
            game[i] = ``;
        }
        return game;
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
          // 0 1 2 
          // 3 4 5 
          // 6 7 8 
    
        for(let i = 0; i < sets.length; i++) {
            let arr = sets[i];
    
            if(gameboard[arr[0]] && gameboard[arr[0]] === gameboard[arr[1]] && gameboard[arr[1]] === gameboard[arr[2]]) {
                return true;
            }
        }
        printGrid();
        return false;
    }

    const playGame = () => {
        let player = true;
    
        let turns = 0;
    
        while(turns < 9 || checkWin() === true) {
            console.log(`Turn ${turns}`)
            let option = prompt(`user choice: `);
            if(option === `Q`) {
                clearGame();
                return;
            }
            if(game[option] === ``) {
                if(player === true) {
                    game[option] = `X`;
                } else {
                    game[option] = `O`;
                }
                turns++;
                player = !player;
            }
            if(checkWin() === true) {
                printGrid();
                {player? console.log(`Player Wins`) : console.log(`CPU Wins`)};
                clearGame();
                return;
            }
        }
        
    }

    return {clearBoard, checkWin, playGame};
});

function Player() {
    let win = false;
    let name = ``;
}




const board = new Gameboard();
console.log(board);