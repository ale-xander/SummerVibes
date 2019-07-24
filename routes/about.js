const express = require('express');
const router = express.Router();
const aboutCtrl = require('../controllers/aboutCtrl');

console.log('i got to routes/about.js');
router.get('/about', aboutCtrl.showAbout);  

module.exports = router;