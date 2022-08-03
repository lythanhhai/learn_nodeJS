const express = require("express")

const route = express.Router()

const { authController, postLogin, postLogout } = require("../controllers/authController")

route.route("/login").get(authController)

route.route("/login").post(postLogin)

route.route("/logout").post(postLogout)

module.exports = route