const shorId = require('shortid')
const postCreate = (req, res, next) => {
    const data = {
        id: shorId.generate(),
        account: req.body.account,
        amount: req.body.amount,
        userId: req.signedCookies.auth
    }
    res.status(200).json(data)
}

module.exports = { postCreate }