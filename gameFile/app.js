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
        enemeyChoice = 'ROCK'
    }
    if (randomNumber === 2) {
        enemeyChoice = 'KAMI'
    }
    if (randomNumber === 3) {
        enemeyChoice = 'TIJERAS'
    }
    enemyChoiceDisplay.innerHTML = enemeyChoice
}
function getResult(){
    if (enemeyChoice === youtChoice){
        result = "TIE But Its More Like A Loss :-)"
    }
    if (enemeyChoice === 'ROCK' && youtChoice === 'KAMI'){
        result = "You Won Wow Think You're So Cool But Can You Win Again"
    }
    if (enemeyChoice === 'ROCK' && youtChoice === 'TIJERAS'){
        result = "Dam You Got Beat Bad Sorry Not Sorry"
    }
    if (enemeyChoice === 'KAMI' && youtChoice === 'TIJERAS'){
        result = "You Won Bet You Cheated Though So"
    }
    if (enemeyChoice === 'KAMI' && youtChoice === 'ROCK'){
        result = "I Have Won And You Have Not HaHaHa Loserrr"
    }
    if (enemeyChoice === 'TIJERAS' && youtChoice === 'KAMI'){
        result = "You LOST You LOSER Yeah I Won In Your Face"
    }
    if (enemeyChoice === 'TIJERAS' && youtChoice === 'ROCK'){
        result = "Alas You Have Won But Remember Cheaters Dont Prosper Sooo"
    }
    resultDisplay.innerHTML = result
}