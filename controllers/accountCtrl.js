const db = require('../models');
const responseFunc = require('./resposnse');

module.exports = {
    index: (req, res) =>    {
        db.Customer.find({}, (error, foundCustomer)=>{
            if(error) return responseFunc.sendErrorResponse(res, error);
            responseFunc.sendErrorResponse(res, foundCustomer)
        })
    }
}