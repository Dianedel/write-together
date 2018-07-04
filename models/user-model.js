const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  lastName: { 
    type: String, 
    required: true },
  firstName: { 
    type: String, 
    required: true },
  pseudo: {
    type:String,
    unique: true},
  email: {
    type: String, 
    required: true,
    unique: true,
    match: /^.+@.+\..+$/
  },
  role: {
    type: String,
    enum: [ "user", "admin"],
    default: "user",
    required: true
  },
   //only for users who signed up normally (enlever le required true pour un accès mixte)
  encryptedPassword: { type: String },
   //only for users who logged in with Google
  googleID: { type: String },
  birthday: { type: Date },
  imageUrl: {
    type: String,
    default: "/images/users/avatar.png"
  },
  description: {
    type: String, 
    maxlength: 500
  }, 
}, { 
    timestamps: true  
});

const User = mongoose.model("User", userSchema);

userSchema.virtual("isAdmin").get(function () {
  return this.role === "admin";
});

userSchema.virtual("displayName").get(function () {
  if (!this.pseudo) {
    return `${this.firstName} ${this.lastName}`;
  }
  return this.pseudo;
});

module.exports = User;
