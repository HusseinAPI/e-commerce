import express from 'express';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const userRouter = express.Router();
import User from '../models/userModel.js';
import { generateToken, isAuth } from '../jwt.js';

// Sign In

userRouter.use(cookieParser());

userRouter.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.find({ email });

    if (userExist) {
      const passwordMatch = await bcrypt.compare(
        password,
        userExist[0].password
      );

      if (passwordMatch) {
        const user = {
          _id: userExist[0]._id,
          fullName: userExist[0].fullName,
          email: userExist[0].email,
          profileImg: userExist[0].profileImg,
          token: generateToken({
            _id: userExist[0]._id,
            email: userExist[0].email,
          }),
        };
        res.status(200).json(user);
      }
    } else {
      res.status(404).json({ message: 'User not Found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Wrong Email or Password' });
  }
});

// router.get('/profile', jwt, (req, res) => {
//   // Access authenticated user information from req.user
//   res.send(`Welcome to your profile, user ${req.user.userId}!`);
// });

// Sign Up

userRouter.post('/signup', async (req, res) => {
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
      newUser.save();

      const user = {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profileImg: newUser.profileImg,
        token: generateToken({
          _id: newUser._id,
          email: newUser.email,
        }),
      };

      res.status(201).json(user);
    }
  } catch (error) {
    res.status(404).json({ message: 'Email Not Valid' });
  }
});

// Update user information

userRouter.put('/:userId', isAuth, async (req, res) => {
  try {
    const { userId } = req.params;
    const userExist = await User.find({ _id: userId });

    if (userExist.length !== 0) {
      const updateUserData = {
        email: req.body.email,
        profileImg: req.body.profileImg,
        fullName: req.body.fullName,
        phone: req.body.phone,
        postalCode: req.body.postalCode,
        address: req.body.address,
      };
      const userUpdate = await User.updateOne({ _id: userId }, updateUserData);

      if (userUpdate.modifiedCount) {
        const userUpdated = {
          _id: req.body.userId,
          email: req.body.email,
          profileImg: req.body.profileImg,
          fullName: req.body.fullName,
          phone: req.body.phone,
          postalCode: req.body.postalCode,
          address: req.body.address,
          token: req.body.token,
        };
        res.status(200).json(userUpdated);
      }
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

export default userRouter;
