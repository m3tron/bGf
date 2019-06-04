var express = require("express");

var db = require("../models");

var router = express.Router();

var transactions = require("../models/transactions.js");

// The main index page
router.get("/", function(req, res) {
  res.render("index", {
    style: "styleIndex.css"
  });
});

module.exports = router;
