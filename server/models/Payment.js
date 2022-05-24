const mongoose = require('mongoose');

const { Schema } = mongoose;

const paymentSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Pay = mongoose.model('payment', paymentSchema);

module.exports = Pay;
