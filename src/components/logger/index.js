import logger from 'hoopa-logger';

function logInfo({ params = {}, message }) {
  logger.info(params, message);
}

function logError({ params = {}, message }) {
  logger.error(params, message);
}

export { logInfo, logError };
