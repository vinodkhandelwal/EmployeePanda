'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
var MenuItemSchema = new Schema({
 itemname: String,
 category: String,
 rate: Number,
 quantity: {
  	 type: Number,
     default: 0
  }
});


var VendorSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  phonenumber: Number,
  emailid: String, 
  role: {
  	 type: String,
     default: 'Vendor'
  },
  location:{
  	type: String,
    default: 'PDC1'
  },
  imgname: String,
  menu: [MenuItemSchema]
});

module.exports = mongoose.model('Vendor', VendorSchema);

