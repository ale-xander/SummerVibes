const db = require('../models');

// Post Create New Item In Cart
const createItem = (req, res) => {
  db.Cart.create(req.body, (err, newItem) => {
    if(error) console.log(error);
    responseFunc.sendResponse(res, newItem);
  });
};

// Delete Item From Cart
const deleteItem = (req,res) =>    {
  db.Cart.findOneAndDelete({name: req.params.id}, (error, deletedItem) =>{
      if(error) return responseFunc.sendErrorResponse(res, error);
      responseFunc.sendResponse(res, deletedItem);
  })
};

// Export the class 
module.exports = {
  createItem,
  deleteItem
}
