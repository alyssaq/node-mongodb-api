const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')

const config = require('./config')
const db = require('./database')
const routes = require('./routes')

const app = express()
const dbUrl = config.db.uri

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(compression())
app.use(cors({
  origin: '*',
  methods: ['GET, PUT, POST, DELETE, OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Uncomment the 2 lines below to populate your db
// var utils = require('./utils/db')
// utils.emptyAndPopulate('../models/crud', '../data/crud.json')

console.log('Connecting to:', dbUrl)
db.connect(dbUrl)
  .then(() => {
    console.log('Connected to Mongo DB!')
    routes.setup(app)
    app.listen(config.port)
    console.log('Server up at port %d', config.port)
  })
  .catch(err => {
    console.error('Could not connect to Mongo database', err)
    process.exit(0)
  })
