
function getComputerChoice() {
    const hands = [`rock`, `paper`, `scissor`];
    choice_num = Math.floor(Math.random() * 3);
    return hands[choice_num];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();



    console.log(`You chose ${playerSelection}`);

    if(playerSelection == computerSelection) {
        return `You both chose ${playerSelection}. Its a TIE.`
    } 
    else if(playerSelection == `ROCK`) {
        if(computerSelection == `PAPER`) {
            return `You Lose! PAPER beats ROCK`;
        } else {
            return `You Win! ROCK beats SCISSOR`;
        }
    } 
    else if(playerSelection == `PAPER`) {
        if(computerSelection == `SCISSOR`) {
            return `You Lose! SCISSOR beats PAPER`;
        } else {
            return `You Win! PAPER beats ROCK`;
        }
    } else {
        // if playerSelection is SCISSOR
        if(computerSelection == `ROCK`) {
            return `You Lose! ROCK beats SCISSOR`;
        } else {
            return `You Win! SCISSOR beats PAPER`;
        }
    }

}

function game(choice, results) {
    // console.log(`this is my ${choice}`);
    wins = 0;
    losses = 0;

    // choice = String(prompt(`Your choice: `));
    result = playRound(choice, getComputerChoice());
    console.log(result);
    if(result.includes(`Lose`)) {
        losses += 1;
    } else if(result.includes(`Win`)) {
        wins += 1;
        }
    // 
    console.log(`${wins} wins and ${losses} losses.`);
    if(wins == losses) return `The game is a TIE`;
    else if(wins > losses) return `Player Wins.`;
    else return `Computer Wins.`;
}

let buttons = document.getElementById('buttons');
choice = "";
buttons.addEventListener('click', (e) => {
    choice = String(e.target.id);
    let results = document.getElementById('results');
    game(choice, results);
});
