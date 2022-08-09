const express = require('express')
const transferRoute = express.Router()

const { postCreate } = require('../controllers/transferController')

transferRoute.route("").post(postCreate)

module.exports = transferRoute