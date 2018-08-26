'use strict'

const { Router } = require('express')
const dialects = require('../../dialects')

module.exports = () => {
  const router = Router()

  router.get('/', (req, res) => {
    res.json(Object.keys(dialects).map((name) => ({ name, total: dialects[name].length })))
  })

  router.get('/:dialect', (req, res, next) => {
    if (!dialects[req.params.dialect]) {
      return next()
    }

    res.json(dialects[req.params.dialect])
  })

  return router
}
