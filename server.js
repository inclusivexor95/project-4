const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');

require('dotenv').config();
require('./config/database');

const port = process.env.PORT || 3001;

const charactersRouter = require('./routes/api/characters');
const abilitiesRouter = require('./routes/api/abilities');
const itemsRouter = require('./routes/api/items');
const usersRouter = require('./routes/api/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', usersRouter);
app.use(require('./config/auth'));
app.use('/api/abilities', abilitiesRouter);
app.use('/api/characters', charactersRouter);
app.use('/api/items', itemsRouter);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
}); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

module.exports = app;
