const mongoose = require('mongoose')
const config = require('../../config')
const logger = require('../../logger')

const msgError = logger.error(
  'MongoDB Connection Error. Please make sure that MongoDB is running.'
)
const msgInfo = logger.info('Database connection OK')

module.exports = () => {
  mongoose.connect(config.database)
  mongoose.connection.on('error', () => msgError)
  mongoose.connection.on('open', () => msgInfo)
}