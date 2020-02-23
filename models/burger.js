// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createOne: function(cols, vals, cb) {
    orm.createOne("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
