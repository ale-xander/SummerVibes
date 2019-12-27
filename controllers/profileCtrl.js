// Database
const db = require('../models');

// GET User Profile
const showProfile = (req, res) => {
  if (!req.session.currentUser) {
    return res.redirect('/accounts/login');
  }

  db.User.findById(req.session.currentUser._id, (err, foundUser) => {
    if (err) return res.render('index', { errors: [{ message: 'Something went wrong, please try again' }] });

    res.render('profile/show', { currentUser: foundUser })
  });
}

//UPDATE 
const updateProfile = (req,res)=>{
  if (!req.session.currentUser) {
    return res.redirect('/accounts/login');
  }
  db.User.findOneAndUpdate({id: req.params._id}, (error, updatedUser)=>{
    if(error) return responseFunc.sendErrorResponse(res, error);
    responseFunc.sendResponse(res, updatedUser);
});
}



//DELETE
const deleteProfile = (req,res)=>{
  if (!req.session.currentUser) {
    return res.redirect('/accounts/login');
  }
  db.User.findOneAndDelete({name: req.params._id}, (error, deletedUser) =>{
    if(error) return responseFunc.sendErrorResponse(res, error);
    responseFunc.sendResponse(res, deletedUser);
})
}

module.exports = {
  showProfile,
  updateProfile,
  deleteProfile
}
