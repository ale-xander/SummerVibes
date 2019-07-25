const Item = require('../models/Item');

function index(req, res) {
    Item.find({ 'category': req.query.category }).then(items => {
        res.render('shop', {
            user: req.session.currentUser,
            editMode: req.query.edit,
            items
        });
    });
}

module.exports = {
    index
};