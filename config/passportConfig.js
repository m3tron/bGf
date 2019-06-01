var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");

var db = require("../models");
var errors = [];

passport.use(
  new LocalStrategy(
    // change default sign-in from username to email
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        if (!user) {
          console.log("user not found");
          errors.push("User does not exist");
          return done(null, false, { errors });
        }

        // compare password
        bcrypt.compare(password, user.password, function(err, passwordMatch) {
          if (err) throw err;
          if (passwordMatch) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Password is incorrect"
            });
          }
        });
      });
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(userId, cb) {
  db.User.findByPk(userId).then(function(user) {
    cb(null, user);
  });
});

module.exports = passport;
