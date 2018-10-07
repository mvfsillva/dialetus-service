const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cors = require('cors')

require('dotenv').load()

const config = require('./config')
const routes = require('./lib/routes')

const app = express()

app.config = config
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())
app.set('port', config.port)

app.use(routes())

module.exports = app
