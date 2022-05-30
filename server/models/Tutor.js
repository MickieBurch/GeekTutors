
const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema

const tutorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  tutorId: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
  articles: [articleSchema]
    

});


const Tutor = mongoose.model('Tutor', tutorSchema);

module.exports = Tutor;
