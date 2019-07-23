const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    name:{
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
    onSale: Boolean
});

const Item = mongoose.model('Item', ItemSchema);
module.export = Item;
