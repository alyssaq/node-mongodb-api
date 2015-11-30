const mongoose = require('mongoose')

function connect (dbUrl, cb) {
  mongoose.connect(dbUrl)

  return new Promise((resolve, reject) => {
    mongoose.connection.on('error', function (err) {
      mongoose.disconnect()
      reject(err)
    })

    mongoose.connection.on('open', function () {
      resolve(dbUrl)
    })
  })
}

module.exports = {
  connect: connect
}
