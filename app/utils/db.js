function emptyAndPopulate(modelPath, jsonPath) {
  var Collection = require(modelPath);
  var JsonDATA = require(jsonPath);

  // Clear out old data
  Collection.remove({}, function (err) {
    if (err) console.log('Error deleting old data!');
  });

  // Batch add data
  Collection.create(JsonDATA, function (err) {
    if (err) {
      console.log('Error on save', err);
    } else {
      console.log('Data has been saved');
    }
  });
}

module.exports = {
  emptyAndPopulate: emptyAndPopulate
};
