import logger from 'hoopa-logger';

function logInfo({ params = {}, message }) {
  logger.info(JSON.stringify(params), message);
}

function logError({ params = {}, message }) {
  logger.error(JSON.stringify(params), message);
}

export { logInfo, logError };
