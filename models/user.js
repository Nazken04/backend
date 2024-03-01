const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ['admin', 'regular user'],
    default: 'regular user'
  }
});

// the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
