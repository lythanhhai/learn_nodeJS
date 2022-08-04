const express = require('express')
const paginationRoute = express.Router()

const { getProductByPage } = require('../controllers/paginationController')

paginationRoute.route("").get(getProductByPage)

module.exports = paginationRoute