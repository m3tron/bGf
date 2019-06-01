var db = require("../models");
var express = require("express");
var moment = require("moment");
var router = express.Router();
var Sequelize = require("sequelize");
var auth = require("../config/middleware/auth");

// Routes
// =============================================================
// Get route for retrieving a single User information
router.get("/transactions", function(req, res) {
  console.log(req.query.from);
  var startFromDate = "1970-01-01T00:00:00Z";
  if (req.query && req.query.from) {
    startFromDate = req.query.from;
  }
  db.Transactions.findAll({
    where: {
      UserId: req.user.id,
      createdAt: { [Sequelize.Op.gt]: startFromDate }
    }
  }).then(function(txns) {
    var amount = 0;
    var txnsCopy = [];
    for (var i = 0; i < txns.length; i++) {
      amount = amount + parseFloat(txns[i].amount);
      txnsCopy.push({
        createdAt: moment(txns[i].createdAt).format("LLL"),
        category: txns[i].category,
        amount: txns[i].amount
      });
    }

    res.render("transactions", {
      transactions: txnsCopy,
      total: amount,
      layout: false
    });
  });
});

// To get to the profile page
router.get("/profile", auth, function(req, res) {
  res.render("profile", {
    style: "styleProfile.css"
  });
});

router.post("/profile", function(req, res) {
  // console.log(req.body);
  db.Transactions.create({
    UserId: req.user.id,
    category: req.body.category,
    amount: req.body.amount
  }).then(function() {
    res.redirect("/profile");
  });
});
module.exports = router;
