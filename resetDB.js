var mongoose = require("mongoose");
var models = require('./models');

/**
 * Connect to the database
 */
var db = mongoose.connection;
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/cogs121');
db.on('error', console.error.bind(console, 'Mongo DB Connection Error:'));
db.once('open', function(callback) {
    console.log("Database connected successfully.");
});

/**
 * Reset database contents
 */
models.Message
  .find()
  .remove()
  .exec(function (){
    console.log("Success!");
    mongoose.connection.close();
  });
