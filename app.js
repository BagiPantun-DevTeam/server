var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors');
require('dotenv');

var gcsRouter = require('./routes/gcs');
var usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const unsplashRouter = require('./routes/unsplash');

mongoose.connect('mongodb://admin:abc123@ds243931.mlab.com:43931/poem', {
  useNewUrlParser: true,
});

// will be changed with mas Richard's mLab

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('connected!');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/gcs', gcsRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/unsplash', unsplashRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
