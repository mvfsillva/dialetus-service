const dialects = require('../../../dialects')
const dialectHelper = require('../../helpers/dialect')

module.exports = (req, res) => {
  if (dialects[req.params.region]) {
    const compiledDialects = dialects[req.params.region].map(({ slug }) =>
      dialectHelper.get(req.params.region, slug)
    )

    return res.json(compiledDialects)
  }

  return res.status(404).send({ error: 'Not found!' })
}