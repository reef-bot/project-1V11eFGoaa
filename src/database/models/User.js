const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // User schema fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;