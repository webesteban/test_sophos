var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cart_routes = require('./routes/cart');

var error_middleware = require('./middleware/error');

var app = express();

// set models in express
// app.set('models', require('./models'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(error_middleware.log_errors);

app.use('/api/v1/cart', cart_routes);

module.exports = app;

