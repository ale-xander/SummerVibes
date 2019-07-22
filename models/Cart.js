const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    itemId:{
        type: String,
        required: true
    }
});

const Cart = mongoose.model('Cart', CartSchema);
module.export = Cart;
