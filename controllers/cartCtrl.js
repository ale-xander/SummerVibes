const db = require('../models');


// POST Create New Item In Cart
const createItem = (req, res) => {
  db.Cart.create(req.body, (err, newItem) => {
    if(error) return responseFunc.sendErrorResponse(res, error);
    responseFunc.sendResponse(res, foundCustomer);
  });
};

//Delete Item From Cart
const deleteItem = (req,res) =>    {
  db.Cart.findOneAndDelete({name: req.params.id}, (error, deletedItem) =>{
      if(error) return responseFunc.sendErrorResponse(res, error);
      responseFunc.sendResponse(res, deletedItem);
  })
};


module.exports = {
  createItem,
  deleteItem
}
