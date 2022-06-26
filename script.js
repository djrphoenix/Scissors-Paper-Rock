function computerPlay() {
    const game = ['Scissors', 'Paper', 'Rock']
    let choice = Math.floor(Math.random() * game.length);

    if (choice === 0) {
        choice = 'Scissors'
    }
    else if (choice === 1) {
        choice = 'Paper'
    }
    else {
        choice = 'Rock'
    }
            
    console.log(choice);
}

