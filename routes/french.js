const express = require("express");


const router = express.Router();



router.get("/", (req, res, next) => {
    res.render("home-page-fr");
  })


module.exports = router;