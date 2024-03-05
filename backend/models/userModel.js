const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  profileImg: { type: String },
  address: { type: String },
  postalCode: { type: String },
  favourite: { type: Array },
});

module.exports = mongoose.model('User', userSchema);
