const { RockPaperScissors } =  require('./spec.helper')


describe('rockPaperScissors', () => {
    let rockPaperScissors = new RockPaperScissors
    
    describe('tie', () => {
        it('should return "tie" on "rock", "rock"', () => {
            expect(rockPaperScissors('rock', 'rock')).to.equal('tie');
        });

        it('should return "tie" on "paper", "paper"', () => {
            expect(rockPaperScissors('paper', 'paper')).to.equal('tie');
        });

        it('should return "tie" on "scissors", "scissors"', () => {
            expect(rockPaperScissors('scissors', 'scissors')).to.equal('tie');
        });

    })

})
