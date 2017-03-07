/**
 * Created by vinod.khandelwal on 21-08-2016.
 */
var express = require("express");

var emppanda = require('../controllers/emppanda.server.logincontroller.js');


var loginRouter = express.Router();
loginRouter.route('/')
    .post(emppanda.loginUser);

module.exports = loginRouter;