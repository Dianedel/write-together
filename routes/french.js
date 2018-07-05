const express = require("express");
const router = express.Router();
const Author = require("../models/author-model.js");
const Texte = require("../models/text-model.js")


// GET page d'accueil FRENCH
router.get("/", (req, res, next) => {
    res.render("home-page-fr");
  })

// GET liste des textes et des listes des textes proposés pour le vote
router.get("/texts-list", (req, res, next) => {
    Texte.find()
    .populate("author")
    .then((textResults) => {
        res.locals.texteArray = textResults;
        res.render("text-views/texts-list");
    })
    .catch((err) => {
        next(err);
    })
  });

  router.get("/votes", (req, res, next) => {
    Texte.find()
    .populate("author")
    .then((textResults) => {
        res.locals.texteArray = textResults;
        res.render("text-views/votes.hbs");
    })
    .catch((err) => {
        next(err);
    })
  });

// GET liste des autheur.e.s
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

// GET fiche d'un.e auteur.e
router.get("/author/:id", (req, res, next) => {
    const { id } = req.params;

    Author.findById(id)
    .then((authorResults) => {
    res.locals.authorItem = authorResults;
    res.render("author-views/author");
    })
    .catch((err) => {
        next(err);
    })
  });

// GET textes les plus populaires
router.get("/populares-texts", (req, res, next) => {
    res.render("text-views/populares");
})

// GET textes récents
router.get("/recents-texts", (req, res, next) => {
    res.render("text-views/recents");
})

// GET votes du moment
router.get("/votes", (req, res, next) => {
    res.render("text-views/votes");
})

// GET un texte
router.get("/text/:id", (req, res, next) => {
    const { id } = req.params;

    Texte.findById(id)
    .then((textResults) => {
        res.locals.textItem = textResults;
        res.render("text-views/text");
    })
    .catch((err) => {
        next(err);
    })
});

module.exports = router;