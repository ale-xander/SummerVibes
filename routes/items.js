const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/itemsCtrl');

router.get('/new', itemsCtrl.newItem);
router.get('/edit/:id', itemsCtrl.editItem);

router.post('/', itemsCtrl.addItem);

router.put('/:id', itemsCtrl.updateItem);
router.delete('/:id', itemsCtrl.removeItem);

module.exports = router;