
function getComputerChoice() {
    const hands = [`rock`, `paper`, `scissor`];
    choice_num = Math.floor(Math.random() * 3);
    return hands[choice_num];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if(playerSelection == computerSelection) {
        return `You both chose ${playerSelection}. Its a TIE.`
    } 
    else if(playerSelection == `ROCK`) {
        if(computerSelection == `PAPER`) {
            return `You Lose! Paper beats Rock`;
        } else {
            return `You Win! Rock beats Scissor`;
        }
    } 
    else if(playerSelection == `PAPER`) {
        if(computerSelection == `SCISSOR`) {
            return `You Lose! Scissor beats Paper`;
        } else {
            return `You Win! Paper beats Rock`;
        }
    } else {
        // if playerSelection is SCISSOR
        if(computerSelection == `ROCK`) {
            return `You Lose! Rock beats Scissor`;
        } else {
            return `You Win! Scissor beats Paper`;
        }
    }

}

function game() {
    wins = 0;
    losses = 0;
    for(i = 0; i < 5; i++) {
        choice = String(prompt(`Your choice: `));
        result = playRound(choice, getComputerChoice());
        console.log(result);
        if(result.includes(`Lose`)) {
            losses += 1;
        } else if(result.includes(`Win`)) {
            wins += 1;
        }
    }
    console.log(`${wins} wins and ${losses} losses.`);
    if(wins == losses) return `The game is a TIE`;
    else if(wins > losses) return `Player Wins.`;
    else return `Computer Wins.`;
}
