import { CommonError } from './CommonError';

class ConflictError extends CommonError {
  constructor(message = '', originalError) {
    const code = 'ConflictError';
    const statusCode = 409;
    super({ code, statusCode, message, originalError });
  }
}

export { ConflictError };
