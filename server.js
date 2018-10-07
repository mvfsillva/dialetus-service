const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

require('dotenv').load()

const config = require('./config')
const routes = require('./lib/routes')
const logger = require('./logger')

const app = express()

app.config = config

if (process.env.NODE_ENV !== 'production') {
  const cors = require('cors')
  app.use(cors())
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())
app.set('port', config.port)

app.use(routes())

app.listen(config.port, () => {
  logger.info(
    `Dialetus API server is listening on port ${app.get(
      'port'
    )} (http://localhost:${config.port})`
  )
})

module.exports = app
