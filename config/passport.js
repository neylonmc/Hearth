const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const auth = require("../models/user");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function(email, password, done) {
        auth.User.findOne({
            where: {
                email: email
            }
        }).then(function(authUser) {
            if (!authUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            else if (!authUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, authUser)
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
  module.exports = passport;