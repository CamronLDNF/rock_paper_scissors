const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');
const instruction = document.getElementById('instruction');

let computerSays = document.getElementById('computer-says');
let result = document.getElementById('result');
let computerImage = document.getElementById('computerimage');

const gameImage = "http://is5.mzstatic.com/image/thumb/Purple118/v4/63/2e/de/632ede7d-21ce-050f-7629-b9f4f0d2f833/source/512x512bb.png"
const rockImage = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
const paperImage = "https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png";
const scissorsImage = "https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png";

let computerChoice = getComputerChoice()
let userChoice

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

function changeComputerImage(computerChoice) {
    if(computerChoice === 'rock') {
        computerImage.src = rockImage;
    } else if (computerChoice === 'paper') {
        computerImage.src = paperImage;
    } else if (computerChoice === 'scissors') {
        computerImage.src = scissorsImage;
    }
}

function resetGame() {
    setTimeout(function(){ computerChoice = getComputerChoice(); }, 1);
    setTimeout(function(){ userChoice = ''; }, 1);
    setTimeout(function(){ computerImage.src = gameImage; }, 1000);
}

function determineWinner(userChoice, computerChoice) {

    //  scenarios where there is a tie
    if (userChoice === computerChoice) {
        changeComputerImage(computerChoice);
        computerSays.innerHTML = '';
        instruction.innerHTML = 'Play again:';
        resetGame();
        return 'It\'s a tie!';
    };

    // scenarios where the player wins
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        changeComputerImage(computerChoice);
        computerSays.innerHTML = '';
        instruction.innerHTML = 'Play again:';
        resetGame();
        return 'You win!';
    };
    
    // all other scenarios, computer wins per automatic
    changeComputerImage(computerChoice);
    computerSays.innerHTML = '';
    instruction.innerHTML = 'Play again:';
    resetGame();
    return 'Sorry, the computer wins!';
};

function playGame() {
    rockDiv.addEventListener('click',function() {
    result.innerHTML = determineWinner("rock", computerChoice);
    });

    paperDiv.addEventListener('click', function() {
    result.innerHTML = determineWinner("paper", computerChoice);
    });

    scissorsDiv.addEventListener('click', function() {
    result.innerHTML = determineWinner("scissors", computerChoice);
    });
}

playGame();