const dialects = require('../../../dialects')

module.exports = (req, res) => {
  const regions = Object.keys(dialects).map(name => ({
    name,
    total: dialects[name].length,
  }))

  res.json(regions)
}