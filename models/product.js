 
const mongoose = require('mongoose');

//schema for the product Model

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  image: String,
  pricing: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
