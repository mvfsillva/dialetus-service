import { getCORSHeaders } from './get-cors-headers';
import { cacheControl } from '../cache-control';

/**
 * Convert the params in a valid response obj to AWS serverless model
 *  @private
 *  @memberof Response
 *  @function toAWS
 *  @param {Object} [body] - value to json.stringify
 *  @param {Object} [headers] - headers to set on the response
 *  @param {Number} [statusCode] - http status code
 *  @returns {Object} the response object
 */
function parseResponseToAWSGatewayPattern({ body, headers, statusCode = 200 }) {
  return {
    statusCode,
    headers: {
      ...headers,
      ...getCORSHeaders(),
      ...cacheControl(headers),
    },
    body: JSON.stringify(body),
  };
}

export { parseResponseToAWSGatewayPattern };
