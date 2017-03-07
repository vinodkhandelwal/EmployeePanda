/**
 * Created by vinod.khandelwal on 21-08-2016.
 */
var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var port = 5000;

app.use(bodyParser.json())
app.use(express.static('public'));


var employeeRouter = require("./routs/emppanda.server.employeerout.js");
var vendorRouter = require("./routs/emppanda.server.vendorrout.js");
var loginRouter = require("./routs/emppanda.server.loginrout.js");

app.use('/api/employee',employeeRouter);
app.use('/api/vendor',vendorRouter);
app.use('/api/login',loginRouter);

mongoose.connect('mongodb://localhost:27017/emppanda');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log("connection Opened");
});


app.listen(port, function (err) {
    console.log('running server on port' + port);
});
