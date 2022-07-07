const http = require('http')

const server = http.createServer((req,res) => {
if(req.url === '/'){
    res.end('Home Page')
}
if(req.url === '/about'){
    res.end('About Us')
}
res.end('Error')
})

server.listen(5000, () => {
    console.log('Yo moma listening at 5000')
})