import logger from 'hoopa-logger';

import { logInfo, logError } from '../index';

jest.mock('hoopa-logger');

describe('# Component - logger', () => {
  it('## loggerInfo should be a function', () => {
    expect(logInfo).toBeInstanceOf(Function);
  });

  it('## logError should be a function', () => {
    expect(logError).toBeInstanceOf(Function);
  });

  it('## loggerInfo should be called with a message', () => {
    const message = 'logger.info() must be called';
    logInfo({ message });
    expect(logger.info).toBeCalled();
    expect(logger.info).toBeCalledWith(JSON.stringify({}), message);
  });

  it('## logError should be called with a message', () => {
    const error = new Error('logger.error() must be called');
    logError({ message: error.message, params: { stack: error.stack } });
    expect(logger.error).toBeCalled();
    expect(logger.error).toBeCalledWith(JSON.stringify({ stack: error.stack }), error.message);
  });
});
