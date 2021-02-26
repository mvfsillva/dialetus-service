/* eslint-disable max-len */
/* eslint-disable max-statements */
import { handlerResponseError } from '../index';

describe('# Lib - HTTP - handlerResponseError', () => {
  it('## should recevie the error context and convert it to an AWS response model', () => {
    const error = new Error('Forbidden. Invalid configuration for api key.');
    error.httpStatusCode = 403;
    error.suffixStatusCode = 'invalid-api-key';

    const res = handlerResponseError(error, '9d309dd3-de02-11e8-80ae-db95b1d17f01');

    expect(res).toBeInstanceOf(Object);
    expect(res).toHaveProperty('statusCode', 403);
    expect(res).toHaveProperty('headers');
    expect(res.headers).toBeInstanceOf(Object);
    expect(res.headers['Content-Type']).toBe('application/json; charset=utf-8');
    expect(res.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(res.headers['Access-Control-Allow-Credentials']).toBeTruthy();
    expect(res.headers['Access-Control-Allow-Headers']).toBe(
      'Origin, Content-Type, Accept, x-api-key',
    );
    expect(res.headers['Cache-Control']).toBe(
      'private, max-age=0, no-cache, no-store, must-revalidate',
    );
    expect(res.headers['Pragma']).toBe('no-cache');
    expect(res.headers['Expires']).toBe('0');

    expect(res).toHaveProperty('body');
    expect(res.body).toBe(
      '{"error":{"code":"403-invalid-api-key","message":"Forbidden. Invalid configuration for api key."},"requestId":"9d309dd3-de02-11e8-80ae-db95b1d17f01"}',
    );
  });
});
