const router = require('express').Router();

router.get('/', req, res) =>  {
     res.render('shop/shop'); 
});

router.get('/mens', (req, res) => {
    res.render('shop/mens');
});

router.get('womens', (req, req) => {
    res.render('shop/womens');
}); 

router.get('/kids', (req, res) => {
    res.render('shop/kids');
});

module.exports = router; 













