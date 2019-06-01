var express = require("express");

var db = require("../models");

var router = express.Router();

var transactions = require("../models/transactions.js");

// The main index page
router.get("/", function(req, res) {
  res.render("index", {
<<<<<<< HEAD
    style: 'styleIndex.css'
=======
    style: "style.css"
>>>>>>> 4b119200cf3fe97dca7eb7f14e021be36b6a1364
  });
});

module.exports = router;
