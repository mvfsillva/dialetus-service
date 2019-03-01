const dialectHelper = require('../../helpers/dialect')

module.exports = (req, res) => {
  const dialect = dialectHelper.get(req.params.region, req.params.slug)

  if (dialect) {
    return res.json(dialect)
  }

  return res.status(404).send({ error: 'Not found!' })
}