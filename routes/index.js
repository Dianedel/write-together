const express = require('express');
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model.js");
const Author = require("../models/author-model.js");
const mySpace = require("../models/user-model.js");
// laisser const router à la dernière place
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
    //console.log(req.session);
    //console.log(req.user);

  if (req.user) {
    //console.log("Logged IN")
  }
  else {
    //console.log("Logged OUT")
  }

  res.render('index');
});


// GET log in USERS
router.get("/login/user", (req, res, next) => {
  res.render("auth-views/log-in-user");
  })

  router.post("/process-login", (req, res, next) => {
    const { email, loginPassword } = req.body;

    User.findOne({ email })
    .then((userDoc) => {
            if (!userDoc) {
            // req.flash("error", "Incorrect email.");
            res.redirect("/login/user");
            return;  // return instead of else when there's a lot of code
        }
        const { encryptedPassword } = userDoc;

        if (!bcrypt.compareSync(loginPassword, encryptedPassword) ){
            res.redirect("/login/user");
            return;
        }

        req.login(userDoc, () => {
            // req.flash("success", "You successfully signed up");
            res.redirect("/fr");
        });
    })
    .catch((err) => {
        next(err);
    });
});

// GET log in AUTHORS
router.get("/login/author", (req, res, next) => {
    res.render("auth-views/log-in-author");
    })

router.post("/process-login", (req, res, next) => {
    const { email, loginPassword } = req.body;

    Author.findOne({ email })
        .then((authorDoc) => {
            if (!authorDoc) {
                res.redirect("/login/author");
                return;  // return instead of else when there's a lot of code
        }

        const { encryptedPassword } = authorDoc;
            if (!bcrypt.compareSync(loginPassword, encryptedPassword) ) {
                res.redirect("/login/author");
                return;
            }

            req.login(authorDoc, () => {
              // req.flash("success", "You successfully signed up");
                res.redirect("/fr");
          });
      })
      .catch((err) => {
          next(err);
      });
  });



// GET sign up USERS
router.get("/signup/user", (req, res, next) => {
  res.render("auth-views/sign-up-user");
})

router.post("/process-signup", (req, res, next) => {
  const { firstName, lastName, description, email, originalPassword } = req.body;

  if (originalPassword === "" || originalPassword.match(/[0-9]/) === null) {
    //   req.flash("", "")
      res.redirect("/signup/user");
      return; // return instead of else when there's a lot of code
  }

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ firstName, lastName,  description, email, encryptedPassword })
  .then((userDoc) => {
    //   req.flash("success", "....")
      res.redirect("/fr");
  })
  .catch((err) => {
      next(err);
  });
});

// GET sign up AUTHORS
router.get("/signup/author", (req, res, next) => {
    res.render("auth-views/sign-up-author");
  })

  router.post("/process-signup-author", (req, res, next) => {
    const { firstName, lastName, description, email, originalPassword } = req.body;

    // Password can't be blank and requires a number
    if (originalPassword === "" || originalPassword.match(/[0-9]/) === null) {
      //   req.flash("", "")
        res.redirect("/signup/author");
        return; // return instead of else when there's a lot of code
    }

    const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

    Author.create({ firstName, lastName, description, email, encryptedPassword })
    .then((authorDoc) => {
      //   req.flash("success", "....")
      //res.send (authorDoc);
        res.redirect("/fr");
    })
    .catch((err) => {
        next(err);
    });
  });

// log out
router.get("/logout", (req, res, next) => {
  // "req.logout()" is a Passport method for logging OUT the user
  req.logout();

  //"req.flash()" is defined by the "connect-flash" package
//   req.flash("success", "Logged out successfully!");
  res.redirect("/fr");
});

// GET mon espace
router.get("/my-space", (req, res, next) => {
    mySpace.findById(req.user._id)
    .then((myspaceResults) => {
        res.locals.myspaceItem = myspaceResults;
        res.render("auth-views/my-space");
    })
    .catch((err) => {
        next(err);
    })
});




// GET poster un texte
router.get("/text-post", (req, res, next) => {
    //
    if (!req.user || req.user.role !== "author" || requ.user.role !== "admin") {
      //redirect away if you are not logged in
      //req.flash
      //alert("Espace inacessible! Il semble que vous ne soyez pas connecté en tant qu'auteur");
      res.redirect("login/author");
      return;
    }
    res.render("author-views/text-post.hbs");
  });

  // POST poster un texte
  router.post("/process-text", (req, res, next) => {
    if  (!req.user || req.user.role !== "author" || requ.user.role !== "admin") {
       //req.flash("error", "Il semble que vous ne soyez pas connecté en tant qu'auteur");
       //alert("Espace inacessible! Il semble que vous ne soyez pas connecté en tant qu'auteur");
       res.redirect("login/author");
      return;
    }

  const { title, content } = req.body;

  Texte.create( {author:req.user._id, title, content} )
    .then ((texteDoc) => {
      //req.flash("success", "Votre texte a été enregistré avec succès");
      //alert("success", "Votre texte a été enregistré avec succès");
      res.redirect("/fr");
    })
    .catch((err) => {
      next(err);
    })
});







module.exports = router;
