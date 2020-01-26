const { Router } = require('express')
const pkg = require('../package')
const middleware = require('../middlewares')
const regionsRouter = require('./regions')
const dialectsRouter = require('./dialects')
const searchRouter = require('./search')
const flagsRouter = require('./flags')

module.exports = () => {
  const router = new Router()

  router.use(middleware.sanitizer)
  router.get('/', (_, res) => res.send({ up: true, version: pkg.version }))
  router.use('/dialect', dialectsRouter())
  router.use('/regions', regionsRouter())
  router.use('/search', searchRouter())
  router.use('/flags', flagsRouter())

  return router
}
