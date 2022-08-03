const md5 = require('md5');
const listUser = require("../db");

const authController = (req, res) => {};

const postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const allUser = listUser.User;

  const hashedPassword = md5(password)
  allUser.forEach((user, index) => {
    if (user.email === email && user.password === hashedPassword) {
      res.cookie("auth", randomCookie(30), { signed: true });
      res.locals.user = user;
      res.status(200).json({ success: true, message: "Login succesful" });
      res.redirect("/Home");
    }
  });

  res
    .status(200)
    .json({ success: false, message: "Please check your password or email" });
};

const postLogout = (req, res) => {
  if(req.cookies.auth)
  {
    res.cookie("auth", "")
    res.status(200).json({ success: true, message: "Logout succesful" });
    return
  }
  else
  {
    res.status(200).json({ success: true, message: "Have you ever logged" });
  }
}

function randomCookie(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = { authController, postLogin, postLogout };
