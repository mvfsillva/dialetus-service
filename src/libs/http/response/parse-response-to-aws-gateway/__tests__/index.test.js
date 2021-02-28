/* eslint-disable max-lines */
/* eslint-disable max-statements */
import { parseResponseToAWSGatewayPattern } from '../index';

describe('# Lib - HTTP - parseResponseToAWSGatewayPattern', () => {
  it('should convert the params in a valid response obj to AWS serverless model with default status code 200', () => {
    const body = {
      data: { xpto: 1 },
      requestId: '12334-dasdaw-32412a',
    };
    const headers = {
      'Cache-Control': 'private, max-age=0, no-cache, no-store, must-revalidate',
    };

    const res = parseResponseToAWSGatewayPattern({ body, headers });

    expect(res).toBeInstanceOf(Object);
    expect(res).toHaveProperty('body');
    expect(res).toHaveProperty('statusCode', 200);
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
  });

  it('should convert the params in a valid response obj to AWS serverless model', () => {
    const body = {
      data: { xpto: 1 },
      requestId: '12334-dasdaw-32412a',
    };
    const headers = {
      'Cache-Control': 'private, max-age=0, no-cache, no-store, must-revalidate',
    };

    const res = parseResponseToAWSGatewayPattern({ body, headers, statusCode: 201 });

    expect(res).toBeInstanceOf(Object);
    expect(res).toHaveProperty('body');
    expect(res).toHaveProperty('statusCode', 201);
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
  });
});
