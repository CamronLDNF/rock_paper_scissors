function getComputerChoice() {
    number = Math.floor(Math.random()*2)
    switch (number) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';}
}

const computerChoice = getComputerChoice();

module.exports = function determineWinner(playerChoice, computerChoice) {

    //  scenarios where there is a tie
    if (playerChoice === computerChoice) {
        return 'Tie!';
    };

    // scenarios where player wins
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    };
    
    // all other scenarios, computer wins
    return 'Loser!';
    };


// playGame();