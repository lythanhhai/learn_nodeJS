const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT

// router
const mailRouter = require('./routes/mailRoutes')
app.use("/send-mail", mailRouter)

app.use(express.urlencoded({ extended: false }))
app.use(express.json)

app.listen(port, () => {
    console.log(`Server are running at port ${port}`)
})

// send mail 
// https://protocoderspoint.com/solution-nodemailer-username-and-password-not-accepted/