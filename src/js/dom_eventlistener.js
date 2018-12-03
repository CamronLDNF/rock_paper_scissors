// document.addEventListener('DOMContentLoaded', () => {
//     let button = document.getElementById('button')
//     let displayDiv = document.getElementById('display_answer')
//     button.addEventListener('click', () =>{
//         let value = document.getElementById('value').value
//         let fizzBuzz = new FizzBuzz
//         let result = fizzBuzz.check(value)
//         displayDiv.innerHTML = result;
//     })
// })


document.addEventListener('DOMContentLoaded', () => {
    let rockDiv = document.getElementById('rock')
    let paperDiv = document.getElementById('paper')
    let scissorsDiv = document.getElementById('scissors')
    let instruction = document.getElementById('instruction')
    let computerSays = document.getElementById('computer-says')
    let result = document.getElementById('result')
    let computerImage = document.getElementById('computerimage')
    console.log(rockDiv)
    console.log(paperDiv)
    console.log(scissorsDiv)
    console.log(instruction)
    console.log(computerSays)
    console.log(result)
    console.log(computerImage)
    playGame()
})






