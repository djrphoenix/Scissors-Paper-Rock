function computerPlay() {
    // game choice 
    const game = ['scissors', 'paper', 'rock']
    // random variable number which spits out 0,1,2 according to length of above array
    let choice = Math.floor(Math.random() * game.length);
    // aligning var number with their choices
    if (choice === 0) {
        return 'scissors'
    }
    else if (choice === 1) {
        return 'paper'
    }
    else {
        return 'rock'
    }
}

function round(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    // let computer = computerSelection.toLowerCase();

    if (player === 'rock' && computerSelection == 'rock') {
        winner = 'draw'
        return 'Draw. You both picked Rock';
    } else if (player == 'paper' && computerSelection == 'paper') {
        winner = 'draw'
        return 'Draw. You both picked Paper';
    } else if (player == 'scissors' && computerSelection == 'scissors') {
        winner = 'draw'
        return 'Draw. You both picked Scissors';
    } else if (player === 'scissors' && computerSelection === 'paper') {
        winner = 'player'
        return 'You won! Scissors beats Paper';
    } else if (player === 'scissors' && computerSelection === 'rock') {
        winner = 'computer';
        return 'You lost! Rock beats paper';
    } else if (player === 'paper' && computerSelection === 'rock') {
        winner = 'player';
        return 'You won! Paper beats Rock';
    } else if (player === 'paper' && computerSelection === 'scissors') {
        winner = 'computer';
        return 'You lost! Scissors beats Paper';
    } else if (player === 'rock' && computerSelection === 'scissors') {
        winner = 'player';
        return 'You won! Rock beats Scissors';
    } else if (player === 'rock' && computerSelection === 'paper') {
        winner = 'computer';
        return 'You lost! Paper beats Rock';
    }
}

// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(round(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Scissors, Paper or Rock?");
        const computerSelection = computerPlay();
        round(playerSelection, computerSelection);

        if (winner == 'player') {
            playerScore++;
            console.log('You have won this round!');
        } else if (winner == 'computer') {
            computerScore++;
            console.log('You have lost this round!');
        } else if (winner == 'draw')
            console.log('Draw round')
    }

    if (computerScore > playerScore) {
        console.log('The Computer wins!');
    } else if (playerScore > computerScore) {
        console.log('You beat the computer!');
    } else if (computerScore == playerScore)
        console.log('Draw game!');
}