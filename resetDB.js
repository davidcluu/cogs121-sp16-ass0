var mongoose = require("mongoose");
var models = require('./models');

/**
 * Connect to the database
 */
var local_database_name = 'frank_app';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

/**
 * Reset database contents
 */
models.Message
  .find()
  .remove()
  .exec(function (){
    console.log("Success!");
  });
