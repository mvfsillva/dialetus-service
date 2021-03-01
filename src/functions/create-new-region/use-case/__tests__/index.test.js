import { createNewRegion } from '../index';

describe('# Functions - createNewRegion - use-case', () => {
  it('## should save a new region with success', async () => {
    const dynamoDBSaveItem = async (tableName, data) => {
      return data;
    };
    const tableName = 'mocked-table-data';

    const data = {
      uf: 'ba',
      label: 'Bahia',
      draft: true,
    };

    const newRegion = await createNewRegion(data, { dynamoDBSaveItem, tableName });
    expect(typeof newRegion).toBe('object');
    expect(newRegion).toMatchObject({ label: 'Bahia', uf: 'BA', draft: true });
  });
});
