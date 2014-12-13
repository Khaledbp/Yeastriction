'use strict';

/**
 * Module dependencies. testadfadsf
 */
var mongoose = require('mongoose'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Initializing system variables
var config = require('./server/config/config');
console.log(config.db);
//var db = mongoose.connect(config.db);

var db = mongoose.connect(process.env.MONGO_URL);
console.log("MONGO_URL", process.env.MONGO_URL);
// Bootstrap Models, Dependencies, Routes and the app as an express app
var app = require('./server/config/system/bootstrap')(passport, db);

// Start the app by listening on <port>
app.listen(config.port);
console.log('Mean appppp started on port ' + config.port + ' (' + process.env.NODE_ENV + ')');

// Initializing logger
logger.init(app, passport, mongoose);

// Expose app
exports = module.exports = app;