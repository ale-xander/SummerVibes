const Item = require('../models/Item');

function index(req, res) {
    let query = {};
    if(req.query.category) query = { 'category': req.query.category };
    Item.find(query).then(items => {
        res.render('shop', {
            items
        });
    });
}

module.exports = {
    index
};