const express = require('express')
const path = require('path')

const app = express()

const port = 5000;

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     // console.log(req)
//     res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//      adding to static assets
//      SSR
// })

app.all("*", (req, res) => {
    res.status(404).send("Page not found")
})

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})