function createErrorResponseBody({ code, message, requestId }) {
  return {
    error: { code, message },
    requestId,
  };
}

export { createErrorResponseBody };
