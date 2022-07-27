const express = require('express')
const app = express()

const port = 5000

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.send("About page")
})

app.all("*", (req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})


app.post('/send-user', () => {
    
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
// app.get
// app.post
// app.put 
// app.delete
// app.all
// app.use   
// app.listen