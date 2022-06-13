// Modules
// const secret = 'superSECRET'
// const mario = 'mario'
// const luigi = 'luigi'

// const sayHi = (name) =>{
//     console.log(`Hello person ${name}`)
// }

const names = require('./4name');
const sayHi = require('./5utlis')
const info = require('./6alternativefla')
// console.log(names)

sayHi('Bob')
sayHi(names.mario)
sayHi(names.luigi)