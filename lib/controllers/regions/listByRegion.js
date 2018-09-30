'use strict'

const dialects = require('../../../dialects')

module.exports = (req, res, next) => {
  if (dialects[req.params.region]) {
    return res.json(dialects[req.params.region])
  }

  return res.status(404).send({ error: 'Not found!' })
}