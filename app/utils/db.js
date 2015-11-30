function emptyAndPopulate (modelPath, jsonPath) {
  const Collection = require(modelPath)
  const data = require(jsonPath)

  // Clear out old data
  Collection.remove({}, (err) => {
    if (err) console.log('Error deleting old data!')
  })

  // Batch add data
  Collection.create(data, (err) => {
    if (err) {
      console.log('Error on save', err)
    } else {
      console.log('Data has been saved')
    }
  })
}

module.exports = {
  emptyAndPopulate: emptyAndPopulate
}
