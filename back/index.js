let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const cors = require('cors');

// let indexRouter = require('./routes/index');
// let usersRouter = require('./routes/users');
// let providerRouter = require('./routes/providers');
let apiRouter = require('./routes/test');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({'origin': 'http://localhost:4200'}))

app.get('/', (req,res) => {
    res.json({'name': 'mobin'})
})
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/providers', providerRouter)
app.use('/api', apiRouter)
// app.use('/*', indexRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
    console.log('http://localhost:3000');
})