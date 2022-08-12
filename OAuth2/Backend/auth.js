const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "703855706870-t234dro6a673vjps9g24qa1vbrkakg8k.apps.googleusercontent.com",
    clientSecret: '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',
    callbackURL: "http://localhost:5000/google/callback"
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
})

passport.deserializeUser((user, done) => {
  done(null, user);
})
// oauth2 with expressjs
// https://www.passportjs.org/packages/
// https://www.passportjs.org/packages/passport-google-oauth20/
// https://www.loginradius.com/blog/engineering/google-authentication-with-nodejs-and-passportjs/
// https://viblo.asia/p/authentication-with-google-oauth-using-nodejs-passportjs-mongodb-gAm5yqAV5db