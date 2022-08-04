const authMiddleware = (req, res, next) => {
    // console.log(req.signedCookies)
    if(!req.cookies.auth)
    {
        // res.redirect("/login")
        res.status(200).json({ success: true, message: "not ok" })
        return
    }
    else {
        // res.status(200).json({ success: true, message: "ok" })
        next()
    }
}

module.exports = authMiddleware