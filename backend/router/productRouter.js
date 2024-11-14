import express from 'express';
const productRouter = express.Router();
import Products from '../models/productModel.js';

// fetch products

productRouter.get('/', async (req, res) => {
  try {
    const products = await Products.find().sort({ purchasetimes: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: 'no any products here' });
  }
});

// Set favourite true or false

productRouter.put('/', async (req, res) => {
  try {
    const filter = {
      _id: req.body.id,
    };
    const update = { favourite: req.body.product.favourite };

    const item = await User.updateOne(filter, update);
    console.log(item);
  } catch (error) {
    res.status(400).json({ message: 'wrong data' });
  }
});

export default productRouter;
