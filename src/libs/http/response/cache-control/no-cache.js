/**
 *  Turns off all cache related headers. (HTTP 1.1, HTTP 1.0 and Proxies)
 *
 *  @private
 *  @memberof Response
 *  @function noCache
 *  @returns  {Response} self, the response object
 *
 */
function noCache() {
  return {
    'Cache-Control': 'private, max-age=0, no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  };
}

export { noCache };
