const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
connectDB()
const port = 5000

const goal = require('./routes/goalRoutes')
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// routes
app.use("/api/goals", goal)


app.use(errorHandler)

app.listen(port, () => {
    console.log("Server is running on port 5000")
})


// https://www.youtube.com/watch?v=-0exw-9YJBo&ab_channel=TraversyMedia
// https://github.com/bradtraversy/mern-tutorial
// https://www.udemy.com/course/nodejs-tutorial-and-projects-course/?referralCode=E94792BEAE9ADD204BC7