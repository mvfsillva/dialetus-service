const dialects = require('../../../dialects')

module.exports = (req, res) => {
  const { region } = req.params
  const body = dialects[region]

  return body ? res.send(body) : res.status(404).send({ error: 'Not found!' })
}