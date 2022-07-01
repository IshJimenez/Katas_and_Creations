const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

// writeFileSync('./content/resultSync.txt', `Greetings from: ${first}, ${second}`, {flag: 'a'})

writeFileSync('./content/resultSync.txt', 
`Greetings from: ${first}, ${second}`)
console.log('done with this stuff dude')
console.log('Starting the next task')