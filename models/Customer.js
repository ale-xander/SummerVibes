const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
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

const Customer = mongoose.model('Customer',CustomerSchema);
module.exports = Customer;