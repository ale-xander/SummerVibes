const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/men', ctrl.menCtrl.showItems);
router.get('/women', ctrl.womenCtrl.showItems);
router.get('/kids', ctrl.kidsCtrl.showItems);

module.exports = router;
