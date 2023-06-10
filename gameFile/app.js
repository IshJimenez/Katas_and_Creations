const enemyChoiceDisplay = document.getElementById('enemyChoice')
const userChoiceDisplay = document.getElementById('yourChoice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    youtChoice = e.target.id
    userChoiceDisplay.innerHTML = youtChoice
}))