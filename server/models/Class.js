const mongoose = require('mongoose');

const { Schema } = mongoose;

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
