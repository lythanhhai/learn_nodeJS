const express = require('express');

const bookRoute = express.Router()

const { getBook, createBook, updateBook, deleteBook } = require('../controllers/bookController')

bookRoute.route("/get/:id").get(getBook)
bookRoute.route("/create").post(createBook)
bookRoute.route("/update/:id").put(updateBook)
bookRoute.route("/delete/:id").delete(deleteBook)

module.exports = bookRoute