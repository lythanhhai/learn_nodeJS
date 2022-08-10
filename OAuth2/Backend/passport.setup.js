const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// oauth2 with expressjs
// https://www.passportjs.org/packages/
// https://www.passportjs.org/packages/passport-google-oauth20/
// https://www.loginradius.com/blog/engineering/google-authentication-with-nodejs-and-passportjs/