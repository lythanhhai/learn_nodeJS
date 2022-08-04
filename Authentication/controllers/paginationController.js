const db = require('../db')

const getProductByPage = (req, res) => {
    const listProduct = db.Products
    const page = req.query.page

    if(!page) {
        throw new Error("page not specified")
    }

    let numberItemsEachPage = 10
    const resultProduct = listProduct.slice((page - 1) * numberItemsEachPage, page * numberItemsEachPage)
    if(resultProduct.length === 0)
    {
        res.status(200).json({success: true, message: "Not found any products"})
    }
    else {
        res.status(200).json({ success: true, listProduct: resultProduct })

    }
}

module.exports = { getProductByPage }