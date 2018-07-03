const mongoose = require("mongoose");

const User = require("../models/user-model.js");

mongoose.Promise = Promise;

mongoose 
  .connect('mongodb://localhost/write-together', {useMongoClient : true})
  .then(() => {
    console.log('Connected to MongoDB!')
  }).catch(err => {
    console.error('Error connecting to mongoDB', err)
  });


// imput données auteurs  
const inputAuteurs = [ {
  lastName:"Vogel",
  firstName:"Dominique",
  pseudo:"",
  email: "vogel@toto.com",
  role: "auteur",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: "De la poésie à chaque ligne."
},
{
  lastName:"Gaston",
  firstName:"Gaëla",
  pseudo:"",
  email: "gaston@toto.com",
  role: "auteur",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/Gaela_Gaston.jpg",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Dao",
  firstName:"Géraldine",
  pseudo:"",
  email: "dao@toto.com",
  role: "auteur",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/Gerladine_Dao.jpg",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Debeugny",
  firstName:"Laurence",
  pseudo:"",
  email: "debeugny@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/Laurence_Debeugny.png",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Hamonic",
  firstName:"Marie-Claire",
  pseudo:"Marie-Claire",
  email: "hamonic@toto.com",
  role: "auteur",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/Marie-Claire.jpg",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"de Reyniès Arlot",
  firstName:"Marie-Jeanne",
  pseudo:"",
  email: "dereynies@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/Marie-Jeanne.png",
  description: "Un style contemporain, sobre, élégant."
},
{
  lastName:"Linarès",
  firstName:"Valérie Marie",
  pseudo:"",
  email: "linares@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/.png",
  description: "Un style contemporain, sobre, élégant."
},
{ lastName:"Hugo",
  firstName:"Victor",
  pseudo:"",
  email: "hugo@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: "Auteur prometteur, avec un style soutenu et recherché asorti d'un vrai talent poétique. "
}
]

// imput données contributeurs
const inputContributeurs = [ {
  lastName:"Tartemolle",
  firstName:"Geneviève",
  pseudo:"",
  email: "tartemolle@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Tartempion",
  firstName:"Léon",
  pseudo:"",
  email: "tartempion@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Durance",
  firstName:"Jean",
  pseudo:"",
  email: "durance@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Aubois Dormant",
  firstName:"Abel",
  pseudo:"",
  email: "aubois@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Nicouette",
  firstName:"Sandra",
  pseudo:"",
  email: "nicouette@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
{
  lastName:"Zarela",
  firstName:"Maud",
  pseudo:"",
  email: "zarela@toto.com",
  role: "",
  encryptedPassword: { type: String },
  googleID: { type: String},
  birthday: "",
  imageUrl: "/images/users/user-avatar.png",
  description: ""
},
]

//insert the Auteurs into the DB
User.create(inputAuteurs)
  .then((auteursResults) => {
  console.log(`Created ${auteursResults.length} auteurs in the DB`)
})
.catch((err) => {
console.log('Create auteurs FAIL', err)
});

//insert the Auteurs into the DB
User.create(inputContributeurs)
  .then((contributeursResults) => {
  console.log(`Created ${contributeursResults.length} contributeurs in the DB`)
})
.catch((err) => {
console.log('Create contributeurs FAIL', err)
});
