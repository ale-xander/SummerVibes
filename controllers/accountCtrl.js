const db = require('../models');
const responseFunc = require('./resposnse');
//sendResponse, sendErrorResponse come from controllers/response.js

module.exports = {
    index: (req, res) =>    {
        db.Customer.find({}, (error, foundCustomer)=>{
            if(error) return responseFunc.sendErrorResponse(res, error);
            responseFunc.sendResponse(res, foundCustomer);
        });
    },
    show: (req, res) =>     {
        db.Customer.findOne({name: req.params.name}, (error, foundCustomer)=>{
            if(error) return responseFunc.sendErrorResponse(res, error);
            responseFunc.sendResponse(res, foundCustomer);
        });
    },
    delete: (req,res) =>    {
        db.Customer.findOneAndDelete({name: req.params.name}, (error, deletedCustomer) =>{
            if(error) return responseFunc.sendErrorResponse(res, error);
            responseFunc.sendResponse(res, foundCustomer);
        })
    },
    create: (req, res) =>   {
        db.Customer.create(req.body,(error, createdCustomer)=>{
            if(error) return responseFunc.sendErrorResponse(res, error);
            responseFunc.sendResponse(res, createdCustomer);
        })
    },
    update: (req, res)=>    {
        db.Customer.findOneAndUpdate({name: req.params.name}, (error, updatedCustomer)=>{
            if(error) return responseFunc.sendErrorResponse(res, error);
            responseFunc.sendResponse(res, updatedCustomer);
        });
    }
}