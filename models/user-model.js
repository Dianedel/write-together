const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  lastName: {
    type: String,
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
    enum: [ "contributeur", "author", "admin"],
    default: "contributeur",
    required: true
  },
   //only for users who signed up normally (enlever le required true pour un accès mixte)
   encryptedPassword: { type: String }, //required: true },
   //only for users who logged in with Google
   googleID: { type: String },
  //only for users who logged in with Github
  birthday: { type: Date },
  imageUrl: {
    type: String,
    default: "/images/users/user-avatar.png"
  },
  description: {
    type: String,
    minlength: 20,
    maxlength: 500
  },
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

userSchema.virtual("isAuthor").get(function () {
  return this.role === "author";
});

userSchema.virtual("isAdmin").get(function () {
  return this.role === "admin";
});


module.exports = User;
