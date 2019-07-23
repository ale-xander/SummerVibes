const db = require('../models');


// POST Create New Item In Cart
const createUser = (req, res) => {
  console.log(req.body);
  db.User.create(req.body, (err, newUser) => {
    if (err) return res.sendStatus(400);
    res.sendStatus(200);
  });
};

//Delete Item From Cart



module.exports = {
  createItem,
  deleteItem
}
