'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Order = require('../models/emppanda.server.ordermodel.js'),
  Vendor = require('../models/emppanda.server.vendormodel.js'),
  http = require('http');


/**
 * Add New Vendor
 */
exports.addVendor = function (req, res) {
  
  Vendor.find({'emailid': req.body.emailid}).exec(function (err, vendors) {
  	if (err) {     
	       return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
      });
    } else {
    	if(vendors.length > 0) {
    		 res.send("Vendor Already Exist");
    	}
    	else {
    		 var vendor = new Vendor(req.body);
			  vendor.save(function (err) {
			    if (err) {
			      return res.status(400).send({
			        message: errorHandler.getErrorMessage(err)
			      });
			    } else {
			      res.json(vendor);
			    }
			  });
    	}

    }
  });
  
};


/**
 * List Vendors
 */
exports.listVendors = function (req, res) {
  Vendor.find().sort('-created').exec(function (err, vendors) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(vendors);
    }
  });
};

exports.deleteVendors = function (req, res) {  
  Vendor.remove({role:'Vendor'}).exec();
};


exports.orderListForVendor = function (req, res) {
  Order.find(req.query).sort('-created').exec(function (err, orders) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(orders);
    }
  });
};

exports.updateOrder = function (req, res) {
   Order.update({ "_id": req.body.id }, { $set: { "status": req.body.status}}, function (err, order) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(order);
      
      //Get Updated Order
      console.log("Getting Updated Order");
      var updatedOrder = {};
      Order.find({ "_id": req.body.id }).exec(function (err, orders) {
	    if (err) {
	      return res.status(400).send({
	        message: errorHandler.getErrorMessage(err)
	      });
	    } else {
	      order = orders[0];
	      console.log("Got Updated Order" + JSON.stringify(order));
	      
	       console.log(order.status);
      console.log(order.status == "Order is Ready");
      if(order.status == "Order is Ready") {

	      
	    }
	  }
      	
      });
      
    }
  });
};

