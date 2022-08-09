const express = require('express')

const jwtRoute = express.Router()

const { loginWithJwt } = require('../controllers/jwtController')

jwtRoute.route("/login").post(loginWithJwt)

module.exports = jwtRoute