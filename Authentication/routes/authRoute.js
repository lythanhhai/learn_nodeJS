const express = require("express")

const route = express.Router()

const { authController, postLogin, postLogout, sendFile } = require("../controllers/authController")

route.route("/login").get(authController)

route.route("/login").post(postLogin)

route.route("/logout").post(postLogout)

route.route("/send_file").post(sendFile)

module.exports = route