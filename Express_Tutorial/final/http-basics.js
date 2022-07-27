const http = require('http')
const { readFileSync } = require('fs')

const homePage = readFileSync("./navbar-app/index.html")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeImage = readFileSync("./navbar-app/logo.svg")
const homeLogic = readFileSync("./navbar-app/browser-app.js") 

const server = http.createServer((req, res) => {
    // console.log(`User hit the server`)
    // console.log(req.method)
    // home page
    if(req.url === "/")
    { 
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(homePage)
        res.end()

    }
    else if(req.url === "/styles.css")
    { 
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }
    else if(req.url === "/logo.svg")
    { 
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }
    // about page
    else if(req.url === "/browser-app.js")
    { 
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    else if(req.url === "/about")
    { 
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<h1>About Page</h1>")
        res.end()
    }
    
    // page not found 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write("<h1>Page not found</h1>")
        res.end()
    }
})

server.listen(5000)