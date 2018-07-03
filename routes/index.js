const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET log in
router.get("/login", (req, res, next) => {
  res.render("auth-views/formulaire-in");
  })

// GET mon espace
router.get("/mon-espace", (req, res, next) => {
  res.render("auth-views/mon-espace");
})




module.exports = router;
