const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the front page')
        return
    }
    if(req.url === '/about'){
        res.end('Here is the about hoot hoot')
        return
    }
    res.end(
        `<h1>OH NO</h1>
        <p>We sorry page not here</p>
        <a href="/">Back Home</a>`
    )
    return
})

server.listen(5000)