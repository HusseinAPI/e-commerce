const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  sold: { type: Number },
  img: { type: String },
});

module.exports = mongoose.model('Products', productSchema);
