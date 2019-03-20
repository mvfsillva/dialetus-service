const { Router } = require('express')
const controller = require('../controllers/search')

module.exports = () => {
  const router = new Router()
  router.get('/', controller)
  return router
}
