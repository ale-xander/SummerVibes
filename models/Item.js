const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    name:{
        type: string, 
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
    onSale: boolean
});

const Item = mongoose.model('Item', ItemSchema);
module.export = Item;
