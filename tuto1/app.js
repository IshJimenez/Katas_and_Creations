const {readFile} = require('fs');

const getTxt = (path) => {
    return new Promise((resolve,reject)=>{
        readFile(path, 'utf8', (err,data) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}



const start = async() => {
    try {
        const first = await getTxt('./content/first.txt')
        console.log(first)
    } catch (error) {
        console.log(error)
    }
  
   
}

start()




// getTxt('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))