const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const textSchema = new Schema ({
  title: { 
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 1200
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
    required: true 
  },    
  requests: [
    {
      user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true 
      },
      comments: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 300
      }
    },
  ],
  votes: [
    {
      user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true 
      },
    type: Number,
    min:0,
    max: 5,
    default: 0
    },
  ],
}, { 
    timestamps: true  
});

const Text = mongoose.model("Text", textSchema);

module.exports = Text;