const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

require('dotenv').load()

const config = require('./config')
const routes = require('./lib/routes')
const logger = require('./logger')

const app = express()

app.config = config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())
app.set('port', 4000)
routes(app)

app.listen(4000, () => {
  logger.info(
    `Dialetus API server is listening on port ${app.get(
      'port'
    )} (http://localhost:4000)`
  )
})

module.exports = app
