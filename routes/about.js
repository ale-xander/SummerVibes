const express = require('express');
const router = express.Router();
const aboutCtrl = require('../controllers/aboutCtrl');


router.get('/about', aboutCtrl.showAbout);  

module.exports = router;