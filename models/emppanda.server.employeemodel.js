'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  phonenumber: Number,
  emailid: String, 
  role: {
  	 type: String,
     default: 'Employee'
  },
  location:{
  	type: String,
    default: 'PDC1'
  }
});


module.exports = mongoose.model('Employee', EmployeeSchema);

