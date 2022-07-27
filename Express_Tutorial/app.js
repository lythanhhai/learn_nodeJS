const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')


const port = 5000;

// a middleware 
// app.use('/api', logger)

// multiple middleware
app.use([logger, authorize])

// req => middleware => res
app.get("/home", (req, res) => {
    
    res.send("home")
})

app.get("/about", (req, res) => {
    res.send("about")
})

app.get("/api/products", (req, res) => {
    res.send("products")
})

app.get("/api/items", (req, res) => {
    res.send("items")
})

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})


// structure for node and express js
// https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/