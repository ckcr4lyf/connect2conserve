var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var ejs = require('ejs');
var path = require('path');


var index = require('./routes/index');
var api_v1 = require('./v1/api_route');

var app = express();
var http = require('http').Server(app);

//require('./db/initialize');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set("view engine", "html");
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', index);
app.use('/v1', api_v1);

http.listen(3000, function(){
    console.log("Server started on port 3000");
});