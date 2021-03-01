/* eslint-disable max-lines */
import { adapterRegionsResponse } from '../index';

describe('# Functions - GetAllRegions - adapter', () => {
  it('## should return a success response 200 OK with a list of regions and no cache max age', async () => {
    const data = [
      {
        uf: 'CE',
        label: 'Ceará',
        draft: 'false',
      },
      {
        uf: 'BA',
        label: 'Bahia',
        draft: 'false',
      },
    ];
    const compareBody = {
      regions: [
        { label: 'Ceará', uf: 'CE' },
        { label: 'Bahia', uf: 'BA' },
      ],
    };
    const regions = await adapterRegionsResponse(data, 0);
    expect(typeof regions).toBe('object');
    expect(regions.statusCode).toBe(200);
    expect(regions.body).toMatchObject(compareBody);
    expect(regions.headers.maxAge).toBe(0);
  });

  it('## should return a success response 200 OK with a list of regions and cache value', async () => {
    const data = [
      {
        uf: 'BA',
        label: 'Bahia',
        draft: 'false',
      },
    ];
    const compareBody = {
      regions: [{ label: 'Bahia', uf: 'BA' }],
    };
    const regions = await adapterRegionsResponse(data, 800);

    expect(typeof regions).toBe('object');
    expect(regions.statusCode).toBe(200);
    expect(regions.body).toMatchObject(compareBody);
    expect(regions.headers.maxAge).toBe(800);
  });

  it('## should return a success response 204 No Content because data is empty', async () => {
    const data = [];
    const regions = await adapterRegionsResponse(data, 800);

    expect(typeof regions).toBe('object');
    expect(regions.statusCode).toBe(204);
    expect(regions).toEqual(expect.not.objectContaining({ body: {} }));
    expect(regions).toEqual(expect.not.objectContaining({ headers: {} }));
  });
});
