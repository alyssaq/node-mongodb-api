var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
  group: Number,
  type: String,
  updated: {
    type: Date,
    default: Date.now
  },
  data: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model('Note', noteSchema);
