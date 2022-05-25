const mongoose = require('mongoose');

const { Schema } = mongoose;

const paymentSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  payment: [
    {
      type: Schema.Types.ObjectId,
      ref: 'payment'
    }
  ]
});

const Pay = mongoose.model('payment', paymentSchema);

module.exports = Pay;
