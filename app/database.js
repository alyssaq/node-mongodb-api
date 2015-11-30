const mongoose = require('mongoose')

function connect (dbUrl, cb) {
  mongoose.connect(dbUrl)

  return new Promise((resolve, reject) => {
    mongoose.connection.on('error', (err) => {
      mongoose.disconnect()
      reject(err)
    })

    mongoose.connection.on('open', () => resolve(dbUrl))
  })
}

module.exports = {
  connect: connect
}
