const express = require('express');

const cartRoute = express.Router();

const { addToCart } = require('../controllers/cartController')
cartRoute.route("/:productId").post(addToCart);

module.exports = cartRoute