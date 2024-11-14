import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  sold: { type: Number },
  img: { type: String },
});

const Product = mongoose.model('Products', productSchema);

export default Product;
