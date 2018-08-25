const winston = require('winston')

const { config } = winston

const messageTemplate = options => {
  const d = new Date()
  const level = config.addColors(options.level)
  const { message = '' } = options

  return `${d} - ${level}: ${message}`
}

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.printf(options => {
      return messageTemplate(options)
    })
  ),
  transports: [new winston.transports.Console()],
})

module.exports = logger
