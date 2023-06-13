const enemyChoiceDisplay = document.getElementById('enemyChoice')
const userChoiceDisplay = document.getElementById('yourChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let enemeyChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    youtChoice = e.target.id
    userChoiceDisplay.innerHTML = youtChoice
    generateEnenmyChoice()
}))
function generateEnenmyChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length ) + 1
    
    if (randomNumber === 1) {
        enemeyChoice = 'rock'
    }
    if (randomNumber === 2) {
        enemeyChoice = 'kami'
    }
    if (randomNumber === 3) {
        enemeyChoice = 'tijieras'
    }
    enemyChoiceDisplay.innerHTML = enemeyChoice
}