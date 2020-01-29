const { Router } = require('express')
const controller = require('../controllers/flags')

module.exports = () => {
  const router = new Router()
  router.get('/', controller.list)
  router.get('/:key', controller.get)
  return router
}
