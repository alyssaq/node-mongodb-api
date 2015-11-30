const Note = require('../models/note')

/* Add one Note entry
 * Test post data to Note table with Basic Auth:
 * curl -X POST -H "Content-type: application/json" -H "Authorization: Basic dGVzdHVzZXI6dGVzdHBhc3M=" -d '{"title":"sup", "data":[1,2]}' http://localhost:3000/note -D-
 */
function add (req, res) {
  Note.create(req.body, (err) => {
    if (err) {
      console.error('Error on save!', err)
    } else {
      console.log('Data has been saved')
    }
  })

  res.send('Done')
}

function get (req, res) {
  Note.findOne({title: req.params.title})
    .exec((err, notes) => {
      if (err) return console.error(err)
      res.send(notes)
    })
}

module.exports = {
  add: add,
  get: get
}
