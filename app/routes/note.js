var Note = require('../models/note');

function add(req, res) {
  Note.create(req.body, function (err) {
    if (err) {
      console.log('Error on save!');
    } else {
      console.log('Data has been saved');
    }
  });

  res.send('Done');
}

function get(req, res) {
  Note.find()
    .limit(10)
    .exec(function (err, notes) {
      if (err) return console.error(err);
      res.send(200, notes);
    });
}

module.exports = {
  add: add,
  get: get
};
