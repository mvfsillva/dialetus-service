const { Router } = require('express')
const controller = require('../controllers/dialects')
const middleware = require('../middlewares')

module.exports = () => {
  const router = new Router()

  router.use(middleware.sanitizer)
  router.get('/', controller.get)
  router.get('/:region', controller.find)

  return router
}