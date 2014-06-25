var Crud = require('../models/crud');

// Test post data to crud table:
// curl -X POST -H "Content-type: application/json" -d '{"msg":"Hello!"}' http://localhost:3000/1.0.0/crud -D-
function add(req, res) {
  console.log(req.method, req.body);

  Crud.create(req.body, function (err) {
    if (err) {
      console.log('Error on save!');
    } else {
      console.log('Data has been saved')
    }
  });

  res.send('Done');
}

module.exports = {
  add: add
};
