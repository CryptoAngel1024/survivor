const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var FacebookStrategy = require( 'passport-facebook' ).Strategy;
const User = require('./db/schema/user')
const userController = require('./controller/user.controller')

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
      done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "%753371068512-4na2j552hcph514tnb4ab5gqtr3gd1b4.apps.googleusercontent.com%",
    clientSecret: "%I7-UR898mowjlWGCSwFBQPF1%",
    callbackURL: "/google/callback",
    passReqToCallback: true
  },
  async function (request, accessToken, refreshToken, profile, done) {
    let user = await userController.getUserByEmail(profile.email);
    if (user)
      return done(null, user);
    else {
      return done(null, profile);
    }
  }
));


passport.use(new FacebookStrategy({
  clientID: "%528163798194853%",
  clientSecret: "%546b5a06fdd0b3a36d49d980402d20d1%",
  callbackURL: "http://localhost:3080/facebook/callback"
},
function(request, accessToken, refreshToken, profile, done) {
  return User.findOne({email: profile.email}, (err, currentUser) => done(err, currentUser));
  }
));
