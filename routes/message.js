var models = require('../models');

exports.send = function(req, res) {
  var newMessage = new models.Message({
    'email' : req.body.email,
    'content' : req.body.content
  });
  newMessage.save(function(err, message) {
    if(err) console.log(err);

    console.log('Saved message from ' + message.email + ' with content "' + message.content + '"');
  });

  res.redirect('/');
}
