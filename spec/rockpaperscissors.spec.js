const { RockPaperScissors } =  require('./spec.helper')
let determineWinner = require('../src/js/rockpaperscissors.js')

describe('rockPaperScissors', () => {
    // let rockPaperScissors = new RockPaperScissors
    
    describe('tie', () => {
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



})
