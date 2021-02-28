import { logError } from '../../../../components/logger';
import { parseResponseToAWSGatewayPattern } from '../parse-response-to-aws-gateway';
import { createErrorResponseBody } from './create-error-response-body';
import { getErrorCodePattern } from './get-error-code-pattern';

/**
 * Handler the error and convert it to a valid response obj to AWS serverless model
 *  @public
 *  @memberof Response
 *  @function toAWS
 *  @param {Object} [err] - value that contains all information to json.stringify
 *  @param {Number} [requestId] - AWS request id tracing
 *  @returns {Object} the response object
 */
function handlerResponseError(
  { httpStatusCode = 500, suffixStatusCode, message, stack },
  requestId,
) {
  logError({ message: message, params: { stack } });
  const code = getErrorCodePattern(httpStatusCode, suffixStatusCode);
  return parseResponseToAWSGatewayPattern({
    body: createErrorResponseBody({ code, message, requestId }),
    statusCode: httpStatusCode,
  });
}

export { handlerResponseError };
