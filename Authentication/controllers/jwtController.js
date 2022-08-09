const jwt = require('jsonwebtoken');
const listUser = require('../db').User
const md5 = require('md5')

const loginWithJwt = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    listUser.forEach((user, index) => {
        if(email === user.email && md5(password) === user.password)
        {
            const token = jwt.sign({ email: email }, process.env.SECRET_TOKEN, { expiresIn: "1h" })
            res.status(200).json({ success: true, message: "Login successfully!!!", token: token })
            return
        }
    })

    res.status(200).json({ success: true, message: "Please check email and password again!!!" })
}

module.exports = { loginWithJwt };