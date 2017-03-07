'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
	Vendor = require('../models/emppanda.server.vendormodel.js'),
	Employee = require('../models/emppanda.server.employeemodel.js');

/**
 * Login
 */

exports.loginUser = function (req, res) {

   Employee.find({'emailid': req.body.emailid}).exec(function (err, employees) {
  	if (err) {     
	       return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
      });
    } else {
    	if(employees.length > 0) {
    		 if(req.body.password === 'password'){
    		 	if(req.body.deviceid) {
    		 		 Employee.update({ "emailid": req.body.emailid }, { $set: { "deviceid": req.body.deviceid}}, function (err, order) {
					    if (err) {
					      console.log("could not register the device");
					    } else {
					      console.log("Device successfully Registered");
					    }
					  });    		 		
    		 	}
    		 	res.json(employees);
    		 }
    		 else{
    		 	 return res.status(400).send({
          		   message: "Wrong Password"
  	    		  });
  	    	 }
    	}
    	else {
    		 Vendor.find({'emailid': req.body.emailid}).exec(function (err, vendors) {
			  	if (err) {     
				       return res.status(400).send({
			          message: errorHandler.getErrorMessage(err)
			      });
			    } else {
			    	if(vendors.length > 0) {
			    		 if(req.body.password === 'password'){
			    		 	if(req.body.deviceid) {
			    		 		Vendor.update({ "emailid": req.body.emailid }, { $set: { "deviceid": req.body.deviceid}}, function (err, order) {
								    if (err) {
								      console.log("could not register the device");
								    } else {
								      console.log("Device successfully Registered");
								    }
								  });    		 		
			    		 		}
			    		 	 res.json(vendors);
			    		 }
			    		 else{
			    		 	return res.status(400).send({
			          		   message: "Wrong Password"
			  	    		});
			    		 }
			    	}
			    	else {
			    		return res.status(400).send({
			          		   message: "User does not Exist"
			  	    	 });
			    	}
			
			    }
			  });
 
    	}

    }
  });
};



