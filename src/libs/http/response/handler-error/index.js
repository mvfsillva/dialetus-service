import { logError } from '../../../../components/logger';
import { parseResponseToAWSGatewayPattern } from '../parse-response-to-aws-gateway';
import { createErrorResponseBody } from './create-error-response-body';

/**
 * Handler the error and convert it to a valid response obj to AWS serverless model
 *  @public
 *  @memberof Response
 *  @function toAWS
 *  @param {Object} [err] - value that contains all information to json.stringify
 *  @param {Number} [requestId] - AWS request id tracing
 *  @returns {Object} the response object
 */
function handlerResponseError({ statusCode = 500, code, message, stack }, requestId) {
  logError({ message: message, params: { stack } });
  return parseResponseToAWSGatewayPattern({
    body: createErrorResponseBody({ code, message, requestId }),
    statusCode,
  });
}

export { handlerResponseError };
