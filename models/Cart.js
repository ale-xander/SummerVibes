const mongoose = require('mongoose'); // using node.js require () 
const Schema = mongoose.Schema;

const CartSchema = new Schema({ // 
    userId:{
        type: String,
        required: true
    },
    items:[{
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }]
});

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;
