var models = require('../models');

exports.view = function(req, res) {
  models.Message
    .find()
    .exec(function(err, messages) {
      var data = {
        data: messages
      }

      res.render("index", data);
    });
}
