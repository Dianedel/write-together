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
    ref: "User",
    required: true 
  },    
  requests: [
    {
        contributor: {
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
      }
    ],
  votes: [
    {
      type: number,
      min:0,
      max: 5
    }
     ]

} , { 
    timestamps: true  
});

const Text = mongoose.model("Text", textSchema);

module.exports = Text;