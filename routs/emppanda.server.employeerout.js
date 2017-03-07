/**
 * Created by vinod.khandelwal on 21-08-2016.
 */
var express = require("express");
var emppanda = require('../controllers/emppanda.server.employeecontroller.js');

var employeeRouter = express.Router();

employeeRouter.route('/')
    .get(emppanda.listEmployee)
    .post(emppanda.addEmployee)
    .delete(emppanda.deleteEmployee);


employeeRouter.route('/order')
    .get(emppanda.listOrder)
    .post(emppanda.placeOrder)
    .delete(emppanda.deleteOrder);

module.exports = employeeRouter;
