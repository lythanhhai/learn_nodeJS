require("dotenv").config();
require("./auth");
const express = require("express");
const app = express();
const passport = require("passport");
const session = require('express-session');  // session middleware
var userProfile;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("error success in"));
app.get('/error', (req, res) => res.send("error logging in"));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
//   res.status(200).json({ success: true })

app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/error",
    // successRedirect: "http://localhost:3000",
  }),
  function (req, res) {
    // Successful authentication, redirect success.
    console.log(res);
    console.log(req);
    res.status(200).send("<p>o kia</p>");
  }
);

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: 1,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
