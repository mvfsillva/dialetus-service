'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const mongoose = require('mongoose')

require('dotenv').load()

const config = require('./config')
const connectDB = require('./lib/helpers/db')
const routes = require('./lib/routes')
const logger = require('./logger')

const app = express()

mongoose.Promise = global.Promise

connectDB()

app.config = config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())
app.set('port', config.port)
routes(app)

app.listen(config.port, () => {
  logger.info(
    `Dialetus API server is listening on port ${app.get(
      'port'
    )} (http://localhost:${config.port})`
  )
})

module.exports = app
