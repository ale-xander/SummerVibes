const db = require('../models');
const responseFunc = require('./resposnse');
//sendResponse, sendErrorResponse come from controllers/response.js

module.exports = {
    index: (req, res) =>    {
        db.Customer.find({}, (error, foundCustomer)=>{
            if(error) return sendResponse.sendErrorResponse(res, error);
            sendResponse.sendErrorResponse(res, foundCustomer);
        });
    },
    show: (req, res) =>     {
        db.Customer.findOne({name: req.params.name}, (error, foundCustomer)=>{
            if(error) return sendResponse.sendErrorResponse(res, error);
            sendResponse.sendErrorResponse(res, foundCustomer);
        });
    },
    delete: (req,res) =>    {
        db.Customer.findOneAndDelete({name: req.params.name}, (error, deletedCustomer) =>{
            if(error) return sendResponse.sendErrorResponse(res, error);
            sendResponse.sendErrorResponse(res, foundCustomer);
        })
    }
}