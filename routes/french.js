const express = require("express");
const router = express.Router();

// GET page d'accueil FRENCH
router.get("/", (req, res, next) => {
    res.render("home-page-fr");
  })

// GET liste des textes
router.get("/liste-textes", (req, res, next) => {
    res.render("texte-views/liste-textes");
  })

// GET liste des auteurs
router.get("/liste-auteurs", (req, res, next) => {
    res.render("auteur-views/liste-auteurs");
  })

module.exports = router;