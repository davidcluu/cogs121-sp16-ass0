/**
 * Load dependencies
 */
var mongoose = require('mongoose')
  , Schema   = mongoose.Schema;


/**
 * Schema
 */
var MessageSchema = new Schema({
  'email': String,
  'content': String,
  'created': { type: Date, default: Date.now }
});


/**
 * Models
 */
exports.Message = mongoose.model('Message', MessageSchema);
