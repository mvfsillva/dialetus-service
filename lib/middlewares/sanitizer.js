const sanitize = require('mongo-sanitize')

module.exports = (req, _, next) => {
  Object.keys(req.body).forEach(param => {
    req.body[param] = sanitize(req.body[param])
  })

  Object.keys(req.query).forEach(param => {
    req.query[param] = sanitize(req.query[param])
  })

  return next()
}