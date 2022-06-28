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
    // print to return a value
    console.log(choice);
}

function round(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    // let computer = computerSelection.toLowerCase();

    if (player === 'rock' && computerSelection == 'rock') {
        return 'Draw. You both picked Rock';
    } else if (player == 'paper' && computerSelection == 'paper') {
        return 'Draw. You both picked Paper';
    } else if (player == 'scissors' && computerSelection == 'scissors') {
        return 'Draw. You both picked Scissors';
    } else if (player === 'scissors' && computerSelection === 'paper') {
        return 'You won! Scissors beats Paper';
    } else if (player === 'scissors' && computerSelection === 'rock') {
        return 'You lost! Rock beats paper';
    } else if (player === 'paper' && computerSelection === 'rock') {
        return 'You won! Paper beats Rock';
    } else if (player === 'paper' && computerSelection === 'scissors') {
        return 'You lost! Scissors beats Paper';
    } else if (player === 'rock' && computerSelection === 'scissors') {
        return 'You won! Rock beats Scissors';
    } else if (player === 'rock' && computerSelection === 'paper') {
        return 'You lost! Paper beats Rock';
    }
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection));