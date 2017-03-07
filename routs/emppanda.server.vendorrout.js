/**
 * Created by vinod.khandelwal on 21-08-2016.
 */
var express = require("express");

var emppanda = require('../controllers/emppanda.server.vendorcontroller.js');

var vendorRouter = express.Router();
vendorRouter.route('/')
    .get(emppanda.listVendors)
    .post(emppanda.addVendor)
    .delete(emppanda.deleteVendors);

vendorRouter.route('/order')
    .get(emppanda.orderListForVendor);

module.exports = vendorRouter;
