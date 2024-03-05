const express = require('express');
const productRouter = express.Router();
const Products = require('../models/productModel');

productRouter.get('/', async (req, res) => {
  try {
    const products = await Products.find().sort({ purchasetimes: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: 'no any products here' });
  }
});

module.exports = productRouter;
