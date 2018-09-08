'use strict'

const { Router } = require('express')
const dialects = require('../../dialects')

module.exports = () => {
  const router = new Router()

  router.get('/', (_, res) => {
    res.json(
      Object.keys(dialects).map(name => ({
        name,
        total: dialects[name].length,
      }))
    )
  })

  router.get('/:dialect', (req, res, next) => {
    return dialects[req.params.dialect]
      ? res.json(dialects[req.params.dialect])
      : next()
  })

  return router
}
