const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let rockPaperScissors = fs.readFileSync('./src/js/rockpaperscissors.js');
eval( rockPaperScissors + `\nexports.RockPaperScissors = RockPaperScissors;`)