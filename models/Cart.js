const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./Item');

const CartSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    items:[Item.schema],
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
