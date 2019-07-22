const express = require('express'); // import express 
const router = express.Router();
const ctrl = require('../controllers');

router.get('/signup', ctrl.accountsCtrl.newUser);  
router.post('/signup', ctrl.accountsCtrl.createUser); 
router.get('/'login', ctrl.accountsCtrl.newSession); 
router.post('/'login', ctrl.accountsCtrl.createSession); 
router.get('/'logout, ctrl.accountsCtrl.deleteSession);
router.post('/'logout, ctrl.accoutnCtrl.deleteSession); 

module.express = router; 


