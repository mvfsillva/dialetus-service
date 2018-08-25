'use strict'

const dialectsController = require('./controllers/dialects')
const middleware = require('./middlewares')
const pkg = require('../package')

module.exports = app => {
  app.use(middleware.sanitizer)
  app.get('/', (_, res) => res.send({ up: true, version: pkg.version }))
  app.get('/dialect', dialectsController.get)
}