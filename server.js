const app = require('./app')
const config = require('./config')
const logger = require('./logger')

app.listen(config.port, () => {
  const port = app.get('port')
  logger.info(
    `Dialetus API server is listening on port ${port} (http://localhost:${config.port})`
  )
})

module.exports = app