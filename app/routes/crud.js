const Crud = require('../models/crud')

/* Add one crud entry
 * Test post data to crud table:
 * curl -X POST -H "Authorization: Basic dGVzdHVzZXI6dGVzdHBhc3M=" -d '{"msg":"Hello!"}' http://localhost:3000/crud -D-
 */
function add (req, res) {
  console.log(req.method, req.body)

  Crud.create(req.body, function (err) {
    if (err) {
      console.log('Error on save!')
    } else {
      console.log('Data has been saved')
    }
  })

  res.send('Done')
}

/* Get cruds with matching string msg
 */
function getByMsg (req, res) {
  Crud.find({msg: { '$regex': req.params.msg, '$options': 'i' }}, (err, data) => {
    if (err) return console.error(err)
    res.send(data)
  })
}

/* Get all cruds.
 * To limit number of results, pass limit as a query: /cruds?limit=X
 */
function getAll (req, res) {
  Crud.find()
    .limit(req.query.limit)
    .exec(function (err, data) {
      if (err) return console.error(err)
      res.send(data)
    })
}

module.exports = {
  getByMsg: getByMsg,
  getAll: getAll,
  add: add
}
