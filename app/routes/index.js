var checkAuthHeaders = require('basic-auth');
var noteHandler = require('./note');
var crudHandler = require('./crud');
var basicCred = require('../config').basicAuth;

function authenticate (req, res, next) {
  var cred = checkAuthHeaders(req);

  if (cred &&
      cred.name === basicCred.username &&
      cred.pass === basicCred.password) {
    next();
  } else {
    console.error('Unauthorized: ', cred || 'No Authorization headers');
    res.status(401).send('Unauthorized');
  }
}

function index(req, res) {
  res.send('Alyssa says Hi!');
}

function setup(app) {
  var v = '/' + require('../../package.json').version;
  app.post(v + '/note', authenticate, noteHandler.add);
  app.get (v + '/note/:type', noteHandler.get);
  app.post(v + '/crud', crudHandler.add);
  app.get('/', index);
  app.get(v, index);
}

exports.setup = setup;
