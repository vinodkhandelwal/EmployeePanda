'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Order = require('../models/emppanda.server.ordermodel.js'),
  Employee = require('../models/emppanda.server.employeemodel.js'),
  http = require('http');

/**
 * Add New Employee
 */
exports.addEmployee = function (req, res) {

    //mongoose.connect('mongodb://localhost:27017/emppanda', function (error) {
    //    if (error)return console.log(error);

	Employee.find({'emailid': req.body.emailid}).exec(function (err, employees) {
  	if (err) {     
	       return res.status(400).send({
          message: "Error in adding Employee"
      });
    } else {
    	if(employees.length > 0) {
    		 res.send("User Already Exist");
    	}
    	else {
    		 var employee = new Employee(req.body);
			  employee.save(function (err) {
			    if (err) {
			      return res.status(400).send({
			        message: "Error in adding Employee"
			      });
			    } else {
			      res.json(employee);
			    }
			  });
    	}

    }

  });

  //  });
};


exports.listEmployee = function (req, res) {
  console.log("Getting Employee List..")
  Employee.find().sort('-created').exec(function (err, employees) {
    if (err) {
      return res.status(400).send({
        message: "Could not get employee list"
      });
    } else {
      res.json(employees);
    }
  });
};

exports.deleteEmployee= function (req, res) {
 /* var employee = req.employee;

  employee.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(employee);
    }
  });*/
  
  Employee.remove({role:'Employee'}).exec();
};


exports.orderListForEmp = function (req, res) {
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

exports.listOrder = function (req, res) {
 Order.find().sort('-created').exec(function (err, orders) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(orders);
    }
  });

};

exports.placeOrder = function (req, res) {
   var order = new Order(req.body);
  //vendor.user = req.user;

  order.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(order);
    }
  });
};


exports.deleteOrder= function (req, res) {
 Order.remove().exec();
};



