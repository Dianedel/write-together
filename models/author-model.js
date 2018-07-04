const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema ({
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
    enum: ["author", "admin"],
    default: "author",
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
    type: String, 
    minlength: 20, 
    maxlength: 500,
    required: true
  }, 
}, { 
    timestamps: true  
});

const Author = mongoose.model("Author", authorSchema);

authorSchema.virtual("isAdmin").get(function () {
  return this.role === "admin";
});

authorSchema.virtual("isAuthor").get(function () {
  return this.role === "author";
});

authorSchema.virtual("displayName").get(function () {
  if (!this.pseudo) {
    return `${this.firstName} ${this.lastName}`;
  }
  return this.pseudo;
});

module.exports = Author;
