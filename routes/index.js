const express = require('express');
const router  = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user-model.js");
const Author = require("../models/author-model.js");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET log in
router.get("/login", (req, res, next) => {
  res.render("auth-views/log-in");
  })

  router.post("/process-login", (req, res, next) => {
    const { email, loginPassword } = req.body;

    // check the email by searching the database
    User.findOne({ email })
    .then((userDoc) => {
        // "userDoc" will be falsy if we didn't find a user (wrong email)
        if (!userDoc) {
            // req.flash("error", "Incorrect email.");
            res.redirect("/login");
            return;  // return instead of else when there's a lot of code
        }

        //  we are ready to check the password if the email is okay
        const { encryptedPassword } = userDoc;
        // "compareSync()" will return false if the password is wrong
        if (!bcrypt.compareSync(loginPassword, encryptedPassword) ){
            res.redirect("/login");
            return;
        }

        // we are ready to LOG THEM IN if we get here (password was okay too)
        // "req.login()" is a Passport method for logging in a user
        // (behind the scenes, in calls the "passport.serialize()" function)
        req.login(userDoc, () => {
            // req.flash("success", "You successfully signed up");
            res.redirect("/");
        });
    })
    .catch((err) => {
        next(err);
    });
});



// GET sign up
router.get("/signup", (req, res, next) => {
  res.render("auth-views/sign-up");
})

router.post("/process-signup", (req, res, next) => {
  const { firstName, lastName, email, originalPassword } = req.body;

  // Password can't be blank and requires a number
  if (originalPassword === "" || originalPassword.match(/[0-9]/) === null) {
      //
    //   req.flash("", "")
      res.redirect("/signup");
      return; // return instead of else when there's a lot of code
  }

  // we are ready to save the user if we get here
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ firstName, lastName, email, encryptedPassword })
  .then((userDoc) => {
      //
    //   req.flash("success", "....")
      res.redirect("/");
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
  res.redirect("/");
});

// GET mon espace
router.get("/my-space", (req, res, next) => {
  res.render("auth-views/my-space");
})




module.exports = router;
