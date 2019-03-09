const { Router } = require('express')
const controller = require('../controllers/regions')

module.exports = () => {
  const router = new Router()

  router.get('/', controller.list)
  router.get('/:region/dialects', controller.listByRegion)
  router.get('/:region/dialects/:slug', controller.getOneByRegionAndSlug)

  return router
}