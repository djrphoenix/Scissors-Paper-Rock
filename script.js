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

    if (playerSelection === 'rock' && computerSelection == 'rock') {
        console.log('Draw. You both picked Rock');
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log('Draw. Ypu both picked Paper');
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log('Draw. You both picked Scissors')
    }
}