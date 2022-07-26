const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    // console.log(res)
    if(req.url === "/")
    {
        res.write("Welcome to our home page")
    }
    else if(req.url === "/signin")
    {
        res.write("Please sign in")
    }
    res.end()
})

server.listen(5000)
