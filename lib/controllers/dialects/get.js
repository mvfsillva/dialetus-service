const dialects = require('../../../dialects')

module.exports = (req, res) => {
  const dialect = req.query.dialetus

  res.send({ dialect, dialetus: dialects })
}