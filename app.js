var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var fundosRouter = require('./routes/fundosRout');
var usersRouter = require('./routes/usersRout');
var geoRouter = require('./routes/geoInfoRoute');
var dashRouter = require('./routes/DashBoardRoute');
var homeRouter = require('./routes/homeServicesRoute');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // usa para poder acessar a pasta public

app.use('/', indexRouter);
app.use('/api/fundos', fundosRouter);
app.use('/api/users',usersRouter);
app.use('/api/geo',geoRouter);
app.use('/api/dashboard',dashRouter);
app.use('/api/homeServices', homeRouter);

module.exports = app;
