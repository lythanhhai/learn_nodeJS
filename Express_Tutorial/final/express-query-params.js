const express = require('express')
const app = express()
const { products, people } = require('./data')

const port = 5000;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Home page</h1> <a href='/products'>See products</a>")
})

app.get("/products", (req, res) => {
    const newProduct = products.map((product, index) => {
        const { id, name, image } = product
        return { id, name, image } 
    })
    res.json(newProduct)
})

app.get(`/products/:productID`, (req, res) => {
    const product = products.find(product => product.id === parseInt(req.params.productID))
    if(!product)
    {
        res.status(400).send("<h1>Product not found</h1>")
    }
    res.status(200).json(product)
})

app.get("/api/v1", (req, res) => {
    console.log(req.query)
    const result = products.filter(product => product.name.includes(req.query.search))
    console.log(result)
    if(result.length > 2)
    {
        res.json(result.slice(0, req.query.limit))
    }
    else {
        res.json(result)
    }
})


app.get("/people", (req, res) => {
    res.json(people)
})


app.listen(port, () => {
    console.log(`server is running at ${port}`)
})
