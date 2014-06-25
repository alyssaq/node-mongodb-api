var mongoose = require('mongoose');

function log () {
  console.log.apply(this, Array.prototype.slice.call(arguments));
}

function connect (dbUrl, cb) {
  mongoose.connect(dbUrl);

  mongoose.connection.on('error', function (err) {
    log('mongo connection error:', err);
    mongoose.disconnect();
    cb(err);
  });

  mongoose.connection.on('open', function () {
    log('mongo connection opened at:', dbUrl);
    cb(null);
  });
};

module.exports = {
  connect: connect
};
