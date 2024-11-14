import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  profileImg: { type: String },
  address: { type: String },
  postalCode: { type: String },
  favourite: { type: Array },
});

const User = mongoose.model('User', userSchema);

export default User;
