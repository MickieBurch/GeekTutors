/*
const {Schema,model} = require('mongoose');

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
  articles: [
    {
      type:Schema.Types.ObjectId,
      ref:"Article"
    }
  ]
});


const Tutor = model('Tutor', tutorSchema);

module.exports = Tutor;
*/