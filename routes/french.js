const express = require("express");
const router = express.Router();

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
    res.render("author-views/authors-list");
  })

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