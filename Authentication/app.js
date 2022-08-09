require("dotenv").config()
const express = require('express')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
const app = express()

const connectDB = require("./db/connectDb")
connectDB()

// use middleware for haven't login 
const authMiddleware = require('./middlewares/authMiddleware')
const errorPagination = require('./middlewares/errorMiddleware')
const sessionMiddleware = require('./middlewares/sessionMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.SECRET_KEY))

// router
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const paginationRoute = require('./routes/paginationRoute')
const transferRoute = require('./routes/transferRoute')
const bookRoute = require('./routes/bookRoute')
const jwtRoute = require('./routes/jwtRoute')

app.use(sessionMiddleware)
app.use("/", upload.array("uploaded_file"), authRoute)
app.use("/user", authMiddleware, userRoute)
app.use("/products", errorPagination, paginationRoute)
app.use("/transfer", authMiddleware, transferRoute)
app.use("/book", authMiddleware, bookRoute)
app.use("/jwt", jwtRoute)

app.listen(5000, () => {
    console.log(`Server is running at port 5000`)
})

