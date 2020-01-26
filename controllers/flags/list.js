const flagsHelper = require('../../helpers/flags')

module.exports = (_, res) => {
  const flags = flagsHelper.list()
  res.send({ flags })
}
