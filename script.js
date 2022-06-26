function computerPlay() {
    // game choice 
    const game = ['Scissors', 'Paper', 'Rock']
    // random variable number which spits out 0,1,2 according to length of above array
    let choice = Math.floor(Math.random() * game.length);
    // aligning var number with their choices
    if (choice === 0) {
        choice = 'Scissors'
    }
    else if (choice === 1) {
        choice = 'Paper'
    }
    else {
        choice = 'Rock'
    }
    // print to return a value
    console.log(choice);
}

