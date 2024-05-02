const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userRouter = express.Router();
const User = require('../models/userModel');
const SECRET_KEY = 'bbajcbansiajsjks';

// Check User

userRouter.use(cookieParser());

userRouter.get('/:email/:password', async (req, res) => {
  try {
    const { email, password } = req.params;
    const user = await User.find({ email });

    if (user.length !== 0) {
      const passwordMatch = await bcrypt.compare(password, user[0].password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            id: user._id,
          },
          SECRET_KEY
        );

        res.status(200).json({ token, user });
      }
    }
  } catch (error) {
    res.status(400).json({ message: 'Wrong Email or Password' });
  }
});

// router.get('/profile', jwt, (req, res) => {
//   // Access authenticated user information from req.user
//   res.send(`Welcome to your profile, user ${req.user.userId}!`);
// });

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

    // User filter
    const filter = { _id: req.body.id };

    if (itemExist.length !== 0) {
      // delete from favourite field

      const update = { $pull: { favourite: req.body.product } };

      await User.updateOne(filter, update);
    } else {
      // add to favourite field

      const update = { $push: { favourite: req.body.product } };

      await User.updateOne(filter, update);
    }

    // find after update
    const favouriteItemsUser = await User.find(filter);
    const items = favouriteItemsUser[0].favourite;

    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: 'wrong data' });
  }
});

module.exports = userRouter;
