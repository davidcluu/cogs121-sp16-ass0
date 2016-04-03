var models = require('../models');

reset();

function reset() {
  models.Message
    .find()
    .remove()
    .exec(function (){
      console.log("Success!");
    });
}
