const { Router } = require('express')
const pkg = require('../../package')
const middleware = require('../middlewares')
const regionsRouter = require('./regions')
const dialectsRouter = require('./dialects')

module.exports = () => {
  const router = new Router()

  router.use(middleware.sanitizer)
  router.get('/', (_, res) => res.send({ up: true, version: pkg.version }))
  router.use('/dialect', dialectsRouter())
  router.use('/regions', regionsRouter())

  return router
}