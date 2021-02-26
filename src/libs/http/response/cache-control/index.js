import { noCache } from './no-cache';

function isOptionsValid(options) {
  return options && options.maxAge !== undefined && options.maxAge > 0;
}

/**
 *  Sets the `cache-control` header. If none value is passed to this function the return will be a NO CACHE value
 *
 *  @private
 *  @memberof Response
 *  @function cache
 *  @param {Object} [options] - an options object
 *  @param {Number} options.maxAge - max-age in seconds
 *  @param {String} [type="public"] - value of the header (`"public"` or `"private"`)
 *  @returns {Object} the value set to the header
 *
 */
function cacheControl(options, type = 'public') {
  if (isOptionsValid(options)) {
    type = `${type}, max-age=${options.maxAge}`;
    return { 'Cache-Control': type };
  }
  return noCache();
}

export { cacheControl };
