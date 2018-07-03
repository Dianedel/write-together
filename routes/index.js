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

  router.post("/process-login", (req, res, next) => {
    const { email, loginPassword } = req.body;

    // check the email by searching the database
    User.findOne({ email })
    .then((userDoc) => {
        // "userDoc" will be falsy if we didn't find a user (wrong email)
        if (!userDoc) {
            req.flash("error", "Incorrect email.");
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
            req.flash("success", "........");
            res.redirect("/");
        });
    })
    .catch((err) => {
        next(err);
    });
});



// GET sign up
router.get("/signup", (req, res, next) => {
  res.render("auth-views/formulaire-up");
})

router.post("/process-signup", (req, res, next) => {
  const { fullName, email, originalPassword } = req.body;

  // Password can't be blank and requires a number
  if (originalPassword === "" || originalPassword.match(/[0-9]/) === null) {
      //
      req.flash("", "")
      res.redirect("/signup");
      return; // return instead of else when there's a lot of code
  }

  // we are ready to save the user if we get here
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ fullName, email, encryptedPassword })
  .then((userDoc) => {
      //
      req.flash("success", "....")
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
  req.flash("success", "Logged out successfully!");
  res.redirect("/");
});

// GET mon espace
router.get("/mon-espace", (req, res, next) => {
  res.render("auth-views/mon-espace");
})




module.exports = router;
