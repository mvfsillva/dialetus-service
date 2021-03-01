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

  it('## should return an error when try save new region because label is empty', async () => {
    const dynamoDBSaveItem = async (tableName, data) => {
      if (data && !data.label) {
        const error = new Error('One or more parameter values are not valid.');
        error.code = 'ValidationException';
        error.statusCode = 400;
        throw error;
      }
      return data;
    };
    const tableName = 'mocked-table-data';

    const data = {
      uf: 'ba',
      draft: true,
    };
    try {
      await createNewRegion(data, { dynamoDBSaveItem, tableName });
    } catch (error) {
      expect(typeof error).toBe('object');
    }
  });
});
