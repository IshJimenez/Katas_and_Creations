const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Request event time')
    res.end('Hey world its me')
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000....')
})