const listUser = require("../db");

const authController = (req, res) => {};

const postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const allUser = listUser.User;
  allUser.forEach((user, index) => {
    if (user.email === email && user.password === password) {
    //   res.cookie("auth", randomCookie(30));
      res.status(200).json({ success: true, message: "Login succesful" });
      res.redirect("/Home");
    }
  });

  res
    .status(404)
    .json({ success: false, message: "Please check your password or email" });
};

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

module.exports = { authController, postLogin };
