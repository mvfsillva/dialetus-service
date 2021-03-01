import { getAllRegions } from '../index';

describe('# Functions - GetAllRegions - use-case', () => {
  it('## should return a list of regions', async () => {
    const mock = [
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

    const findRegions = async tableName => {
      return mock;
    };
    const tableName = 'mocked-table-data';

    const regions = await getAllRegions({ findRegions, tableName });

    expect(Array.isArray(regions)).toBe(true);
    expect(regions).toMatchObject(mock);
  });
});
