const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: String,
  data: mongoose.Schema.Types.Mixed,
  updated: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Note', noteSchema)
