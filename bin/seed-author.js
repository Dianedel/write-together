require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Author = require("../models/author-model.js");

mongoose.Promise = Promise;

mongoose 
  .connect(process.env.MONGODB_URI, {useMongoClient : true})
  .then(() => {
    console.log('Connected to MongoDB!')
  }).catch(err => {
    console.error('Error connecting to mongoDB', err)
  });


// input données authors
const inputAuthors = [ {
  lastName:"Vogel",
  firstName:"Dominique",
  email: "vogel@toto.com",
  role: "author",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/avatar.png",
  description: "De la poésie à chaque ligne."
},
{
  lastName:"Gaston",
  firstName:"Gaëla",
  email: "gaston@toto.com",
  role: "author",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/Gaela_Gaston.jpg",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Dao",
  firstName:"Géraldine",
  email: "dao@toto.com",
  role: "author",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/Geraldine_Dao.jpg",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Debeugny",
  firstName:"Laurence",
  email: "debeugny@toto.com",
  role: "author",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/Laurence_Debeugny.png",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Hamonic",
  firstName:"Marie-Claire",
  pseudo:"Marie-Claire",
  email: "hamonic@toto.com",
  role: "author",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/Marie-Claire.jpg",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"de Reyniès Arlot",
  firstName:"Marie-Jeanne",
  email: "dereynies@toto.com",
  role: "author",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/Marie-Jeanne.png",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Linarès",
  firstName:"Valérie Marie",
  email: "linares@toto.com",
  role: "admin",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/Valerie-Marie_Linares.png",
  description: "Un style contemporain, sobre, élégant."
},
{ lastName:"Hugo",
  firstName:"Victor",
  email: "hugo@toto.com",
  role: "author",
  encryptedPassword: bcrypt.hashSync("9999", 10),
  googleID: "",
  birthday: "",
  imageUrl: "/images/authors/Victor_Hugo.jpg",
  description: "Auteur prometteur, avec un style soutenu et recherché asorti d'un vrai talent poétique. "
}
]

//insert the authors into the DB
Author.create(inputAuthors)
  .then((authorsResults) => {
  console.log(`Created ${authorsResults.length} authors in the DB`)
})
.catch((err) => {
console.log('Create authors FAIL', err)
});
