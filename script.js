function computerPlay() {
    // game choice 
    const game = ['scissors', 'paper', 'rock']
    // random variable number which spits out 0,1,2 according to length of above array
    let choice = Math.floor(Math.random() * game.length);
    // aligning var number with their choices
    if (choice === 0) {
        choice = 'scissors'
    }
    else if (choice === 1) {
        choice = 'paper'
    }
    else {
        choice = 'rock'
    }
    // print to return a value
    console.log(choice);
}

function round(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === 'rock' && computer == 'rock') {
        console.log('Draw. You both picked Rock');
    } else if (player == 'paper' && computer == 'paper') {
        console.log('Draw. You both picked Paper');
    } else if (player == 'scissors' && computer == 'scissors') {
        console.log('Draw. You both picked Scissors');
    } else if (player === 'scissors' && computer === 'paper') {
        console.log('You won! Scissors beats Paper');
    } else if (player === 'scissors' && computer === 'rock') {
        console.log('You lost! Rock beats paper');
    } else if (player === 'paper' && computer === 'rock') {
        console.log('You won! Paper beats Rock');
    } else if (player === 'paper' && computer === 'scissors') {
        console.log('You lost! Scissors beats Paper');
    } else if (player === 'rock' && computer === 'scissors') {
        console.log('You won! Rock beats Scissors');
    } else if (player === 'rock' && computer === 'paper') {
        console.log('You lost! Paper beats Rock');
    }
}