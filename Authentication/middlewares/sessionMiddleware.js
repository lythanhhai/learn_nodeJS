const shortId = require("shortid");
const session = (req, res, next) => {
  if (!req.signedCookies.sessionId) {
    res.cookie("sessionId", shortId.generate(), { signed: true });
  }
  next()
};


module.exports = session;