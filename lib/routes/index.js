'use strict'

const { Router } = require('express')
const pkg = require('../../package')
const dialectsController = require('../controllers/dialects')
const middleware = require('../middlewares')
const dialectsRouter = require('./dialects')

module.exports = () => {
  const router = new Router()

  router.use(middleware.sanitizer)
  router.get('/', (_, res) => res.send({ up: true, version: pkg.version }))
  router.get('/dialect', dialectsController.get)
  router.get('/dialect/:region', dialectsController.find)
  router.use('/dialects', dialectsRouter())

  return router
}
