'use strict'

const dialects = require('../../../dialects')

module.exports = (req, res) => {
  if (dialects[req.params.region]) {
    const dialect = dialects[req.params.region].find(
      ({ slug }) => slug === req.params.slug
    )
    if (dialect) {
      return res.json(dialect)
    }
  }

  return res.status(404).send({ error: 'Not found!' })
}
