const express = require("express")

const router = express.Router()

const { authController, postLogin } = require("../controllers/authController")

router.route("/").get(authController)

router.route("/").post(postLogin)

module.exports = router