wins = 0;
losses = 0;
rounds = 0;

function getComputerChoice() {
    const hands = [`rock`, `paper`, `scissor`];
    choice_num = Math.floor(Math.random() * 3);
    return hands[choice_num];
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection) {
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
        
        if(computerSelection == `ROCK`) {
            return `You Lose! ROCK beats SCISSOR`;
        } else {
            return `You Win! SCISSOR beats PAPER`;
        }
    }

}

function game(target, rounddResults) {
    
    choice = target.id;
    playerSelection = choice.toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();

    roundResult.textContent = `Your choice: ${playerSelection} \n`;
    roundResult.textContent += `CPU choice: ${computerSelection} \n`;
    
    result = playRound(playerSelection, computerSelection);
    roundResult.textContent += `${result} \n`;

    if(result.includes(`Lose`)) {
        losses += 1;
    } else if(result.includes(`Win`)) {
        wins += 1;
    }
    
    rounds += 1;
    roundResult.textContent += `${wins} wins and ${losses} losses. \n`;
    results.appendChild(roundResult);
}

let buttons = document.getElementById('buttons');
let results = document.getElementById('results');
let roundResult = document.createElement('p');
roundResult.setAttribute('style', 'white-space: pre;');

buttons.addEventListener('click', (e) => {
    let target = e.target;

    game(target, roundResult);
    if(rounds == 5) {
        if(wins == losses) roundResult.textContent += `The game is a TIE`;
        else if(wins > losses) roundResult.textContent += `Player Wins.`;
        else roundResult.textContent += `Computer Wins.`;
        wins = 0;
        losses = 0;
        rounds = 0;
    }
});


    