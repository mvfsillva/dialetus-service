const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cors = require('cors')
const logger = require('hoopa-logger')

require('dotenv').load()

const config = require('./config')
const routes = require('./routes')

const app = express()

app.config = config
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())
app.set('port', config.port)

app.use(routes())

app.listen(config.port, () => {
  const port = app.get('port')
  logger.info(`Dialetus API server is listening on port ${port} (http://localhost:${config.port})`)
})

module.exports = app