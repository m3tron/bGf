var express = require("express");

var db = require("../models");

var router = express.Router();

var transactions = require("../models/transactions.js");

// The main index page
router.get("/", function (req, res) {
  res.render("index", {
    style: 'styleIndex.css'
  });
});

// To get to the profile page
router.get("/api/profile", function (req, res) {
  res.render("profile", {
    style: 'styleProfile.css'
  });
});

// To get to the login page
router.get("/api/login", function (req, res) {
  res.render("login", {
    style: 'styleLogin.css'
  });
});

// To get to the login page
router.get("/api/register", function (req, res) {
  res.render("register", {
    style: 'styleRegistration.css'
  });
});

router.post("/api/profile", function (req, res) {
  // console.log(req.body);
  db.Transactions.create({
    category: req.body.category,
    amount: req.body.amount
  }).then(res.send("hello"));
});

module.exports = router;
