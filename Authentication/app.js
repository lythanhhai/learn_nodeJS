const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// router
const authRouter = require('./routes/authRoute')

app.use("/login", authRouter)

app.listen(5000, () => {
    console.log(`Server is running at port 5000`)
})