require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user-model.js");

mongoose.Promise = Promise;

mongoose 
  .connect(process.env.MONGODB_URI, {useMongoClient : true})
  .then(() => {
    console.log('Connected to MongoDB for users!')
  }).catch(err => {
    console.error('Error connecting to mongoDB for users', err)
  });


// input données users
const inputUsers = [ {
  lastName:"Tartemolle",
  firstName:"Geneviève",
  email: "tartemolle@toto.com",
  role: "user",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Tartempion",
  firstName:"Léon",
  email: "tartempion@toto.com",
  role: "user",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Durance",
  firstName:"Jean",
  email: "durance@toto.com",
  role: "user",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Aubois Dormant",
  firstName:"Abel",
  email: "aubois@toto.com",
  role: "user",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Nicouette",
  firstName:"Sandra",
  email: "nicouette@toto.com",
  role: "user",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Zarela",
  firstName:"Maud",
  email: "zarela@toto.com",
  role: "user",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"de Lassence",
  firstName:"Diane",
  email: "dianedel@toto.com",
  role: "admin",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
]


//insert the Auteurs into the DB
User.create(inputUsers)
  .then((userResults) => {
  console.log(`Created ${userResults.length} users in the DB`)
})
.catch((err) => {
console.log('Create users FAIL', err)
});

