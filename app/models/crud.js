var mongoose = require('mongoose');

var crudSchema = new mongoose.Schema({
  group: {
    type: String,
    default: '13'
  },
  msg: {
    type: String,
    default: 'Default msg'
  },
  value: Number
});

module.exports = mongoose.model('crud', crudSchema);