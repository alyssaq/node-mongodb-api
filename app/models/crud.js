const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
  group: {
    type: String,
    default: 'Home'
  },
  msg: {
    type: String,
    default: 'Default msg'
  },
  value: Number
})

module.exports = mongoose.model('crud', crudSchema)
