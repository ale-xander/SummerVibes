const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/men', ctrl.showCtrl.showItems);
router.get('/women', ctrl.showCtrl.showItems);
router.get('/kids', ctrl.showCtrl.showItems);

module.exports = router;
