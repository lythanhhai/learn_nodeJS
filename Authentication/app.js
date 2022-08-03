const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

// use middleware for haven't login 
const authMiddleware = require('./middlewares/authMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser("123456789"))

// router
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')

app.use("/", authRoute)
app.use("/user", authMiddleware, userRoute)

app.listen(5000, () => {
    console.log(`Server is running at port 5000`)
})

