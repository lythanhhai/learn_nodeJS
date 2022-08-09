const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // console.log(req.signedCookies)
  // if(!req.signedCookies.auth)
  // {
  //     // res.redirect("/login")
  //     res.status(200).json({ success: true, message: "not ok" })
  //     return
  // }
  // else {
  //     // res.status(200).json({ success: true, message: "ok" })
  //     next()
  // }
//   console.log(req.headers["Authorization"])
  const authHeader = req.headers["authorization"];
  // const token = authHeader && authHeader.split(".")[1];

  if (authHeader == null) return res.sendStatus(401);

  jwt.verify(authHeader, process.env.SECRET_TOKEN, (err, user) => {
    console.log(user);
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

module.exports = authMiddleware;
