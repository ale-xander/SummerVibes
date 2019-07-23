const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./Item');

const CartSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    items:[Items.Schema],
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
