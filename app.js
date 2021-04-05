const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Knex = require('knex');

const app = express();

require('dotenv/config');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { Model } = require('objection');
const knex = require('./database/knex');
Model.knex(knex);

const routes = require('./src/routes/index');
app.use('/api',routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get('env') === 'development' ? err : {}
    });
  });

//start the server
const port = process.env.NODE_ENV || process.env.PORT || 5000;
app.listen(port,() => { console.log(`App listen on port ${port}`)});