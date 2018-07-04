const express = require("express");
const router = express.Router();
const Author = require("../models/author-model");
// const Text = require("../models/")


// GET page d'accueil FRENCH
router.get("/", (req, res, next) => {
    res.render("home-page-fr");
  })

// GET list des texts
router.get("/texts-list", (req, res, next) => {
    res.render("text-views/texts-list");
  })

// GET list des authors
router.get("/authors-list", (req, res, next) => {
    Author.find()
    .then((authorResults) => {
        res.locals.authorArray = authorResults;
        res.render("author-views/authors-list");
    })
    .catch((err) => {
        next(err);
    })
  });

// GET texts les plus populaires
router.get("/populares-texts", (req, res, next) => {
    res.render("text-views/populares");
})

// GET texts récents
router.get("/recents-texts", (req, res, next) => {
    res.render("text-views/recents");
})

// GET votes du moment
router.get("/votes", (req, res, next) => {
    res.render("text-views/votes");
})

// GET un text
router.get("/text", (req, res, next) => {
    res.render("text-views/text");
})

module.exports = router;