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

// set the counter to zero to count score
let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        document.querySelector('.player').textContent = playerScore;
    } else if (player === 'scissors' && computerSelection === 'rock') {
        winner = 'computer';
        alert('You lost! Rock beats paper');
        computerScore++;
        document.querySelector('.computer').textContent = computerScore;
    } else if (player === 'paper' && computerSelection === 'rock') {
        winner = 'player';
        alert('You won! Paper beats Rock');
        playerScore++;
        document.querySelector('.player').textContent = playerScore;
    } else if (player === 'paper' && computerSelection === 'scissors') {
        winner = 'computer';
        alert('You lost! Scissors beats Paper');
        computerScore++;
        document.querySelector('.computer').textContent = computerScore;
    } else if (player === 'rock' && computerSelection === 'scissors') {
        winner = 'player';
        alert('You won! Rock beats Scissors');
        playerScore++;
        document.querySelector('.player').textContent = playerScore;
    } else if (player === 'rock' && computerSelection === 'paper') {
        winner = 'computer';
        alert('You lost! Paper beats Rock');
        computerScore++;
        document.querySelector('.computer').textContent = computerScore;
    }

    if (playerScore > 4) {
        document.querySelector('.score').textContent = 'RESULTS';
        document.querySelector('.result').textContent = 'You beat the computer!';
    }

    if (computerScore > 4) {
        document.querySelector('.score').textContent = 'RESULTS';
        document.querySelector('.result').textContent = 'You beat the computer!';
    }

    if (playerScore > 4 || computerScore > 4) {
        let btn = document.createElement("button");
        btn.textContent = 'Play Again?';
        let win = document.querySelector('.retry');
        win.appendChild(btn);

        function resetGame() {
        btn.addEventListener('click', () => {
            document.location.reload();
        });
        
    }
        resetGame();
    }
    
}

let scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    round(playerSelection, computerSelection);
})

let paper = document.querySelector('.paper')
paper.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    round(playerSelection, computerSelection);
})

let rock = document.querySelector('.rock')
rock.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    round(playerSelection, computerSelection);
})