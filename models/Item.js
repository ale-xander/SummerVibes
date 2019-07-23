const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    brand:{
        type: String, 
        required: true
    },
    sku:{
        type: Number,
        required: true
    },
    description:{type: String},
    price:{
        type: Number,
        required: true,
        min:0
    },
    onSale: Boolean,
    category: {
        type: String,
        required: true
    },
    img_url: String
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
