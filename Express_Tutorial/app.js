const express = require('express');
const { isBuffer } = require('lodash');
const app = express()
const morgan = require('morgan')
const { products, people } = require('./data')

const port = 5000;

// app.use(morgan('tiny'))
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post("/login", (req, res) => {
    console.log(req.body.name)
    res.send("test form")
})

app.get("/api/people", (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post("/api/people", (req, res) => {
    const {name } = req.body;
    if(!name)
    {
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    else {
        res.status(201).send({success: true, person: name})
    }
})

app.put("/api/people/:id", (req, res) => {
    const { name } = req.body;
    const id = req.params.id;
    if(!name) {
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    else {
        res.status(200).send({success: true, person: })
    }
})

app.get("/api/items", (req, res) => {
    res.send("items")
})

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})


// structure for node and express js
// https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/