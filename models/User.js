const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNum: {type: String},
  address: {type: String},
  id: {type: Number},
});

module.exports = mongoose.model('User', UserSchema);