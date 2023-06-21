const enemyChoiceDisplay = document.getElementById('enemyChoice')
const userChoiceDisplay = document.getElementById('yourChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let youtChoice
let enemeyChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    youtChoice = e.target.id
    userChoiceDisplay.innerHTML = youtChoice
    generateEnenmyChoice()
    getResult()
}))
function generateEnenmyChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length ) + 1
    
    if (randomNumber === 1) {
        enemeyChoice = 'Rock'
    }
    if (randomNumber === 2) {
        enemeyChoice = 'Kami'
    }
    if (randomNumber === 3) {
        enemeyChoice = 'Tijeras'
    }
    enemyChoiceDisplay.innerHTML = enemeyChoice
}
function getResult(){
    if (enemeyChoice === youtChoice){
        result = "TIE Try Again To Beat The Machine"
    }
    if (enemeyChoice === 'Rock' && youtChoice === 'Kami'){
        result = "YOU ARE A WINNER"
    }
    if (enemeyChoice === 'Rock' && youtChoice === 'Tijeras'){
        result = "DAM GOT BEAT BY THE MACHINE"
    }
    if (enemeyChoice === 'Kami' && youtChoice === 'Tijeras'){
        result = "YOU WON"
    }
    if (enemeyChoice === 'Kami' && youtChoice === 'Rock'){
        result = "THE MACHINE HAS WON"
    }
    if (enemeyChoice === 'Tijeras' && youtChoice === 'Kami'){
        result = "YOU LOSE REALLY WOW"
    }
    resultDisplay.innerHTML = result
}