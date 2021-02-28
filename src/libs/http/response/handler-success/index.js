import { parseResponseToAWSGatewayPattern } from '../parse-response-to-aws-gateway';

/**
 *  Create a base response object that can be used in the send respons method
 *  @public
 *  @memberof Response
 *  @function create
 *  @param {Object} [body] - value to json.stringify
 *  @param {Object} [headers] - headers to set on the response
 *  @param {Number} headers.maxAge - cache control max-age in seconds
 *  @param {Number} [statusCode] - http status code
 *  @param {String} [requestId] - AWS request id
 *  @returns {Object} the value set to the header
 */
function handlerSuccess({ body, headers, statusCode }, requestId) {
  return parseResponseToAWSGatewayPattern({
    body: { data: body, requestId },
    headers,
    statusCode,
  });
}

export { handlerSuccess };
