const flagsHelper = require('../../helpers/flags')

module.exports = (req, res) => {
  const flag = flagsHelper.get(req.params.key)

  if(!flag) {
    return res.status(404).send({ error: 'Not found!' })
  }

  res.send({ flag })
}
