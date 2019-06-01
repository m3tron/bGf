// packages
var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var passport = require("passport");
// dependencies
var db = require("../models");
var auth = require("../config/middleware/auth");

// To get to the login page
router.get("/login", function(req, res) {
  res.render("login", {
    style: "styleLogin.css"
  });
});

// To get to the login page
router.get("/register", function(req, res) {
  res.render("register", {
    style: "styleRegistration.css"
  });
});

// login user
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "login" }),
  function(req, res) {
    res.redirect("/profile");
    db.User.findOne({ where: { email: req.body.email } }).then(function(user) {
      var id = user.id;
    });
  }
);

// register new user
router.post("/register", function(req, res) {
  var name = req.body.newName;
  var email = req.body.newEmail;
  var password = req.body.newPassword;
  var password2 = req.body.newPassword2;
  var errors = [];
  var success = [];

  // check if all fields are filled out
  if (!name || !email || !password || !password2) {
    errors.push("Please fill out form");
  }

  // check if passwords match
  if (password !== password2) {
    errors.push("Passwords do not match");
  }

  // if there are errors this will output those errors on register page
  if (errors.length > 0) {
    res.render("register", { errors, style: "styleRegistration.css" });
  } else {
    db.User.findOne({ where: { email: email } }).then(function(user) {
      // checks if user already exists
      if (user) {
        errors.push("Account already exists");
        res.render("register", { errors, style: "styleRegistration.css" });
      } else {
        bcrypt.hash(password, 10, function(err, hash) {
          // encrypts password
          if (err) throw err;
          password = hash;
          success.push("Account created successfully. Please log in.");
          db.User.create({
            name: name,
            email: email,
            password: password
          }).then(res.render("login", { success }));
        });
      }
    });
  }
});

//logout user
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// get user data
router.get("/data", function(req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      name: req.user.name
    });
  }
});

module.exports = router;
