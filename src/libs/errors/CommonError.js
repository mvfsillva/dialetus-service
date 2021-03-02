class CommonError extends Error {
  constructor({ code, message, statusCode, originalError }) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.originalError = originalError;

    Error.captureStackTrace(this, this.constructor.name);
  }
}

export { CommonError };
