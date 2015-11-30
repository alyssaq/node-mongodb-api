module.exports = {
  doVersionApi: false,

  port: process.env.PORT || 3000,

  db: {
    sess_interval: 3600,
    uri: // 'mongodb://<username>:<password>@dbh16.mongolab.com:27167/<dbname>' ||
      process.env.MONGOLAB_URI ||
      process.env.COMPOSEMONGO_URL ||
      'mongodb://127.0.0.1:27017/test'
  },

  basicAuth: {
    username: 'testuser',
    password: 'testpass'
  }
}
