const { RockPaperScissors }  =  require('./spec.helper')

describe('Rock Paper Scissors', () => {

    let rockPaperScissors = new RockPaperScissors
    
    describe('Player selects "rock"', () => {
        it('should return "Tie!" on "rock", "rock"', () => {
            expect(determineWinner('rock', 'rock')).to.equal('Tie!');
        });

        it('should return "Loser!" on "rock", "paper"', () => {
            expect(determineWinner('rock', 'paper')).to.equal('Loser!');
        });

        it('should return "You win!" on "rock", "scissors"', () => {
            expect(determineWinner('rock', 'scissors')).to.equal('You win!');
        });

    })

    describe('Player selects "paper"', () => {
        it('should return "Tie!" on "paper", "paper"', () => {
            expect(determineWinner('paper', 'paper')).to.equal('Tie!');
        });

        it('should return "Loser!" on "paper", "scissors"', () => {
            expect(determineWinner('paper', 'scissors')).to.equal('Loser!');
        });

        it('should return "You win!" on "paper", "rock"', () => {
            expect(determineWinner('paper', 'rock')).to.equal('You win!');
        });

    })

    describe('Player selects "scissors"', () => {
        it('should return "Tie!" on "scissors", "scissors"', () => {
            expect(determineWinner('scissors', 'scissors')).to.equal('Tie!');
        });

        it('should return "Loser!" on "scissors", "rock"', () => {
            expect(determineWinner('scissors', 'rock')).to.equal('Loser!');
        });

        it('should return "You win!" on "scissors", "paper"', () => {
            expect(determineWinner('scissors', 'paper')).to.equal('You win!');
        });

    })
})
