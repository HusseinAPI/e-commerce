const express = require('express');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userRouter = express.Router();
const User = require('../models/userModel');

// Check User

userRouter.use(cookieParser());

userRouter.get('/:email/:password', async (req, res) => {
  try {
    const { email, password } = req.params;
    const user = await User.find({ email });

    if (user.length !== 0) {
      const passwordMatch = await bcrypt.compare(password, user[0].password);

      if (passwordMatch) {
        res.cookie('email', email);
        res.cookie(' password', password);
        res.status(200).json(user);
      }
    }
  } catch (error) {
    res.status(400).json({ message: 'Wrong Email or Password' });
  }
});

// Add User

userRouter.post('/', async (req, res) => {
  try {
    const validEmail = await User.find({ email: req.body.email });

    if (validEmail.length === 0) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const userData = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
        profileImg: req.body.profileImg,
      };

      const newUser = await User(userData);
      res.status(201).json(newUser);
      newUser.save();
    }
  } catch (error) {
    res.status(404).json({ message: 'Email Not Valid' });
  }
});

// Update user information

userRouter.put('/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const validEmail = await User.find({ email });

    if (validEmail.length !== 0) {
      const updateUserData = {
        profileImg: req.body.profileImg,
        fullName: req.body.fullName,
        phone: req.body.phone,
        postalCode: req.body.postalCode,
        address: req.body.address,
      };
      const userUpdate = await User.updateOne({ email }, updateUserData);
      res.status(201).json(userUpdate);
    }
  } catch (error) {
    res.status(400).json({ message: 'check your connection and try again' });
  }
});

// Set Product as favourite

userRouter.put('/', async (req, res) => {
  try {
    if (req.body.product.type === 'getFavourite') {
      const itemsFilter = req.body._id;

      const favouriteItemsUser = await User.find(itemsFilter);
      const items = favouriteItemsUser[0].favourite;

      return res.status(200).json(items);
    }
    const findFilter = {
      _id: req.body.id,
      'favourite._id': req.body.product._id,
    };

    //find before update
    const itemExist = await User.find(findFilter);

    if (itemExist.length !== 0) {
      return res.status(200).json({ message: 'item already added' });
    }

    const filter = { _id: req.body.id };
    const update = { $push: { favourite: req.body.product } };

    // update favourite field
    await User.updateOne(filter, update);

    // find after update
    const favouriteItemsUser = await User.find(filter);
    const items = favouriteItemsUser[0].favourite;

    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: 'wrong data' });
  }
});

module.exports = userRouter;
