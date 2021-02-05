const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require("../server/config");

// passport.use(new FacebookStrategy({
//     clientID: 462411381453753,
//     clientSecret: 9b9bc12738be0342b3acf4e3b91981a5,
//     callbackURL: "http://www.hearthathome.com/"
//     // will need to change callbackURL and fb auth setting after deployed
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate(..., function(err, user) {
//       if (err) { return done(err); }
//       done(null, user);
//     });
//   }
// ));

passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_CLIENT_ID,
  clientSecret: config.FACEBOOK_CLIENT_SECRET,
  callbackURL: '/facebook/callback',
  profileFields: ['id', 'displayName', 'email', 'name', 'photos'],
  passReqToCallback: true,
},
function(accessToken, refreshToken, profile, cb) {
  // save the profile on the Database
  // Save the accessToken and refreshToken if you need to call facebook apis later on
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});