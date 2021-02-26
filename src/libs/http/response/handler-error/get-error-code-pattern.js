function getErrorCodePattern(httpStatusCode, suffixStatusCode) {
  return `${httpStatusCode}-${suffixStatusCode || 'internal-error-server'}`;
}

export { getErrorCodePattern };
