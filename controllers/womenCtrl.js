const db = require('../models');

const showItems = (req, res) => {
    if (!req.session.currentUser) {
    return res.redirect('/accounts/login');
    }
    db.Item.findById(req.category, (err, foundCategory)=>{
    if (err) return res.render('index',{errors:[{ message: 'Something went wrong, please try again'}]});
    
    res.render('shop/shop', { results: foundCategory })
    
    });
}

module.exports = {
    showItems,
}
