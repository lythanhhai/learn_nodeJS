const Book = require("../models/Book");

const getBook = async (req, res) => {
  try {
    const book = await Book.findById({ _id: req.params.id });
    res.status(200).json({ success: true, Book: book });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  }
};

const createBook = async (req, res) => {
  try {
    await Book.create({
      title: "Study of the Brain",
      author: "Ly Thanh Hai",
      category: "Health",
    });
    const book = await Book.find();
    res.status(200).json({ success: true, Book: book });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById({ _id: req.params.id });
    await Book.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: "Study of the Brain 2",
        author: "Ly Thanh Hai 1",
        category: "Health 1",
      }
    );
    const listBook = await Book.find();
    res.status(200).json({ success: true, Book: listBook });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findOneAndDelete(
      { _id: req.params.id }
    );
    const listBook = await Book.find();
    res.status(200).json({ success: true, Book: listBook });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false });
  }
};

module.exports = { getBook, createBook, updateBook, deleteBook };
