const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/resultMindGrenade.txt', `This is awesome : ${first} ${second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
  
   
}

start()

// const getTxt = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path, 'utf8', (err,data) => {
//             if(err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }



// getTxt('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

const eventEmitter = require('events');

const customEmitter = new eventEmitter()

customEmitter.on('response', (name, id)=> {
    console.log(`data has arrived and informs ${name} is ${id}`)
})
customEmitter.on('response', ()=> {
    console.log(`Im new`)
})

customEmitter.emit('response', 'bob', 21)