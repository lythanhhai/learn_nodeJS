require("dotenv").config();
require("./auth");
const express = require("express");
const app = express();
const passport = require('passport')
var userProfile;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/success', (req, res) => res.send(userProfile));
// app.get('/error', (req, res) => res.send("error logging in"));

app.get("/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }))
//   res.status(200).json({ success: true })

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
  function(req, res) {
    // Successful authentication, redirect success.
    console.log(res)
    console.log(req)
    res.status(200).send("<p>o kia</p>")
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
