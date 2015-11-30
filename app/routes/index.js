const checkAuthHeaders = require('basic-auth')
const noteHandler = require('./note')
const crudHandler = require('./crud')
const config = require('../config')
const basicCred = config.basicAuth

function authenticate (req, res, next) {
  const cred = checkAuthHeaders(req)

  if (cred &&
      cred.name === basicCred.username &&
      cred.pass === basicCred.password) {
    next()
  } else {
    console.error('Unauthorized: ', cred || 'No Authorization headers')
    res.status(401).send('Unauthorized')
  }
}

function index (req, res) {
  res.send('Hi! Welcome to my API!')
}

function setup (app) {
  const v = config.doVersionApi
    ? '/' + require('../../package.json').version : ''

  app.post(v + '/note', authenticate, noteHandler.add)
  app.get(v + '/note/:title', noteHandler.get)

  app.post(v + '/crud', crudHandler.add)
  app.get(v + '/crud/:msg', crudHandler.getByMsg)
  app.get(v + '/cruds', crudHandler.getAll)

  app.get('/', index)
  app.get(v, index)
}

exports.setup = setup
