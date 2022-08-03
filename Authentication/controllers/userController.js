const getUser = (req, res) => {
    res.status(200).json({ success: true, message: "LTH" })
}

module.exports = { getUser }