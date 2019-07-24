const express = require('express');
const router = express.Router();
const profileCtrl = require('../controllers/profileCtrl');


router.get('/profile', profileCtrl.showProfile);
router.put('/profile', profileCtrl.updateProfile);
router.post('/profile', profileCtrl.deleteProfile)

module.exports = router;





