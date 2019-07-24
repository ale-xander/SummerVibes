const router = require('express').Router();
const shopCtrl = require('../controllers/shopCtrl');

router.get('/', shopCtrl.index);

module.exports = router; 













