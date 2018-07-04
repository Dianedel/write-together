const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD:models/author-model.js
const authorSchema = new Schema ({
  lastName: { 
    type: String, 
=======
const userSchema = new Schema ({
  lastName: {
    type: String,
>>>>>>> 0ee241c43fd00514a527e4ed2ac5112a7e554f86:models/user-model.js
    required: true },
  firstName: {
    type: String,
    required: true },
  pseudo: { type:
    String},
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^.+@.+\..+$/
  },
  role: {
    type: String,
<<<<<<< HEAD:models/author-model.js
    enum: ["author", "admin"],
    default: "author",
=======
    enum: [ "contributeur", "author", "admin"],
    default: "contributeur",
>>>>>>> 0ee241c43fd00514a527e4ed2ac5112a7e554f86:models/user-model.js
    required: true
  },
   //only for users who signed up normally (enlever le required true pour un accès mixte)
  encryptedPassword: { type: String }, //required: true },
   //only for users who logged in with Google
  googleID: { type: String },
  birthday: { type: Date },
  imageUrl: {
    type: String,
    default: "/images/authors/avatar.png"
  },
  description: {
<<<<<<< HEAD:models/author-model.js
    type: String, 
    minlength: 20, 
    maxlength: 500,
    required: true
  }, 
}, { 
    timestamps: true  
=======
    type: String,
    minlength: 20,
    maxlength: 500
  },
}, {
    timestamps: true
>>>>>>> 0ee241c43fd00514a527e4ed2ac5112a7e554f86:models/user-model.js
});

const Author = mongoose.model("Author", authorSchema);

authorSchema.virtual("isAdmin").get(function () {
  return this.role === "admin";
});

authorSchema.virtual("isAuthor").get(function () {
  return this.role === "author";
});

module.exports = Author;
