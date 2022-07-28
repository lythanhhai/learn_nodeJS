const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')


const port = 5000;

// a middleware 
// app.use('/api', logger)

// multiple middleware
// app.use([logger, authorize])

app.use(morgan('tiny'))

// req => middleware => res
app.get("/home", (req, res) => {
    console.log(req.user)
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
