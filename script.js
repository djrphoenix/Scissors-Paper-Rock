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


    // changed return for alert to give detailed result
    if (player === 'rock' && computerSelection == 'rock') {
        winner = 'draw'
        alert('Draw. You both picked Rock');
    } else if (player == 'paper' && computerSelection == 'paper') {
        winner = 'draw'
        alert('Draw. You both picked Paper');
    } else if (player == 'scissors' && computerSelection == 'scissors') {
        winner = 'draw'
        alert('Draw. You both picked Scissors');
    } else if (player === 'scissors' && computerSelection === 'paper') {
        winner = 'player'
        alert('You won! Scissors beats Paper');
    } else if (player === 'scissors' && computerSelection === 'rock') {
        winner = 'computer';
        alert('You lost! Rock beats paper');
    } else if (player === 'paper' && computerSelection === 'rock') {
        winner = 'player';
        alert('You won! Paper beats Rock');
    } else if (player === 'paper' && computerSelection === 'scissors') {
        winner = 'computer';
        alert('You lost! Scissors beats Paper');
    } else if (player === 'rock' && computerSelection === 'scissors') {
        winner = 'player';
        alert('You won! Rock beats Scissors');
    } else if (player === 'rock' && computerSelection === 'paper') {
        winner = 'computer';
        alert('You lost! Paper beats Rock');
    }
}

// const playerSelection = 'rock';
// const computerSelection = computerPlay();
// console.log(round(playerSelection, computerSelection));


// set the counter to zero to count score
let playerScore = 0;
let computerScore = 0;


// game function to run
function game() {
    // 5 game loop
    for (let i = 0; i < 5; i++) {
        // prompt function to get input
        let playerSelection = prompt("Scissors, Paper or Rock?");
        // gets computer guess
        const computerSelection = computerPlay();
        // calls a round to be played
        round(playerSelection, computerSelection);
        // increments score and logs a result
        if (winner == 'player') {
            playerScore++;
            console.log('You have won this round!');
        } else if (winner == 'computer') {
            computerScore++;
            console.log('You have lost this round!');
        } else if (winner == 'draw')
            console.log('Draw round')
    }
    // compares score once loop has been finalised
    if (computerScore > playerScore) {
        console.log('The computer wins!');
    } else if (playerScore > computerScore) {
        console.log('You beat the computer!');
    } else if (computerScore == playerScore)
        console.log('Draw game!');
}