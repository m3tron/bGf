var express = require("express");

var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/profile", function(req, res) {
  res.render("profile");
});

module.exports = router;