const mongoose = require("mongoose");
const Text = require("../models/text-model.js");

mongoose.Promise = Promise;

mongoose 
  .connect('mongodb://localhost/write-together', {useMongoClient : true})
  .then(() => {
    console.log('Connected to MongoDB for texts!')
  }).catch(err => {
    console.error('Error connecting to mongoDB for texts', err)
  });

// input données textes
const inputTexts = [
  { title: "",
    content: "",
    author: "",
    requests: [ {user: "", comments: ""} ],
    votes: [ {user: "", comments: ""} ]
  }
]


  //insert the Auteurs into the DB
Text.create(inputTexts)
.then((textResults) => {
console.log(`Created ${textResults.length} texts in the DB`)
})
.catch((err) => {
console.log('Create texts FAIL', err)
});

