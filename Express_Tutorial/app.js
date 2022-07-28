const express = require('express');
const app = express()
const morgan = require('morgan')

const people = require('./routes/people')
const auth = require('./routes/auth')


const port = 5000;

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// router
app.use('/api/people', people)
app.use('/login', auth)

// app.use(morgan('tiny'))


app.listen(port, () => {
    console.log(`server is running at ${port}`)
})


// structure for node and express js
// https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/