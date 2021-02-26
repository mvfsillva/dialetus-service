import { cacheControl } from '../index';

describe('# Lib - HTTP Cache Control Response', () => {
  it('## should create a obj to sets the public cache-control in the header', () => {
    const obj = cacheControl({ maxAge: 300 });
    expect(obj).toBeInstanceOf(Object);
    expect(obj).toHaveProperty('Cache-Control', 'public, max-age=300');
  });

  it('## should create a obj to sets the private cache-control in the header', () => {
    const obj = cacheControl({ maxAge: 300 }, 'private');
    expect(obj).toBeInstanceOf(Object);
    expect(obj).toHaveProperty('Cache-Control', 'private, max-age=300');
  });

  it('## should create a obj with informations to turns off all cache related headers', () => {
    const obj = cacheControl();
    expect(obj).toBeInstanceOf(Object);
    expect(obj).toHaveProperty(
      'Cache-Control',
      'private, max-age=0, no-cache, no-store, must-revalidate',
    );
    expect(obj).toHaveProperty('Pragma', 'no-cache');
    expect(obj).toHaveProperty('Expires', '0');
  });
});
