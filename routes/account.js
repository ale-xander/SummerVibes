const express = require('express'); // import express 
const router = express.Router();
const accountsCtrl = require('../controllers/accountCtrl');

router.get('/signup', accountsCtrl.newUser);  
router.post('/signup', accountsCtrl.createUser); 
router.get('/login', accountsCtrl.newSession);
router.post('/login', accountsCtrl.createSession); 
router.get('/logout', accountsCtrl.deleteSession);
router.post('/logout', accountsCtrl.deleteSession); 

module.exports = router; 


