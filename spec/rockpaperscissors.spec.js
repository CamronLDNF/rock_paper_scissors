const { RockPaperScissors } =  require('./spec.helper')
let determineWinner = require('../src/js/rockpaperscissors.js')

describe('rockPaperScissors', () => {
    // let rockPaperScissors = new RockPaperScissors
    
    describe('tie scenario', () => {
        it('should return "tie" on "rock", "rock"', () => {
            expect(determineWinner('rock', 'rock')).to.equal('tie');
        });

        it('should return "tie" on "paper", "paper"', () => {
            expect(determineWinner('paper', 'paper')).to.equal('tie');
        });

        it('should return "tie" on "scissors", "scissors"', () => {
            expect(determineWinner('scissors', 'scissors')).to.equal('tie');
        });

    })

    describe('player winning"', () => {
        it('should return "You win!" on "rock", "scissors"', () => {
            expect(determineWinner('rock', 'scissors')).to.equal('You win!');
        });

        it('should return "You win!" on "paper", "rock"', () => {
            expect(determineWinner('paper', 'rock')).to.equal('You win!');
        });

        it('should return "You win!" on "scissors", "paper"', () => {
            expect(determineWinner('scissors', 'paper')).to.equal('You win!');
        });

    })


})
