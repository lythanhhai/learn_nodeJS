const mongoose = require("mongoose")

// const Book = mongoose.Schema({
//     title: String,
//     // title1: {
//     //     type: String,
//     //     required: true,
//     //     unique: true
//     // }
//     published: {
//         type: Date,
//         default: Date.now
//     },
//     keywords: {
//         type: Array,
//     },
//     author: {
//         type: mongoose.Schema.ObjectId,
//         ref: "User"
//     },
//     detail: {
//         modelNumber: Number,
//         hardcover: Boolean,
//         reviews: Number,
//         rank: Number
//     }
// })
const Book = mongoose.Schema({
    // id: {
    //     type: Number,
    
    // },
    title: String,
    author: String, 
    category: String,
})

module.exports = mongoose.model("Book", Book)