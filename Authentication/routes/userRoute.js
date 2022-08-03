const express = require('express');

const userRoute = express.Router()

// const authMiddleware = require('../middlewares/authMiddleware')

const { getUser } = require('../controllers/userController')

userRoute.route("/").get(getUser)

module.exports = userRoute