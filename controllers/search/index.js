const dialectHelper = require('../../helpers/dialect')

const search = (req, res) => {
  const dialects = dialectHelper.search(req.query.q)
  if (dialects) {
    return res.json(dialects)
  }
  return res.status(404).send({ error: 'Not found!' })
}

module.exports = search
