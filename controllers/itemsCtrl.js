const Item = require('../models/Item');

function addItem(req, res) {
    Item.create(req.body).then(item => {
        res.redirect(`/shop?category=${item.category}`);
    }).catch(err => {
        console.log(err);
    });
}

function updateItem(req, res) {
    Item.findById(req.params.id).then(item => {
        Object.keys(req.body).forEach(key => {
            item[key] = req.body[key];
        });
        item.save().then(item => res.redirect(`/shop?category=${item.category}`));
    }).catch(err => console.log(err));
}

function removeItem(req, res) {
    Item.findById(req.params.id).then(item => {
        item.remove().then(item => res.redirect(`/shop?category=${item.category}`))
    })
}

function newItem(req, res) {
    if(!req.session.currentUser || !req.session.currentUser.isAdmin)
        res.redirect('/accounts/login');
    else
        res.render('items/newItem', {
            user: req.session.currentUser
        });
}

function editItem(req, res) {
    if(!req.session.currentUser || !req.session.currentUser.isAdmin)
        res.redirect('/accounts/login');
    else
        Item.findById(req.params.id).then(item => {
            res.render('items/editItem', {
                user: req.session.currentUser,
                item
            });
        }).catch(err => console.log(err));
}

module.exports = {
    addItem,
    updateItem,
    removeItem,
    newItem,
    editItem
};