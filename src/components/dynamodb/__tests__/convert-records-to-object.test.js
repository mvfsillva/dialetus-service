/* eslint-disable max-lines */
import { convertRecordsToObject } from '../convert-records-to-object';

describe('# Components - DYNAMODB - convertRecordsToObject', () => {
  it('## should return a new object if data is an object', () => {
    const data = {
      region: {
        S: 'Bahia',
      },
      meanings: {
        L: [
          {
            S: 'Sem problemas',
          },
          {
            S: 'Fique tranquilo',
          },
          {
            S: 'Esfriar a cabeça',
          },
        ],
      },
      dialect: {
        S: 'Relaxe mô fiu',
      },
    };

    const convertedData = convertRecordsToObject(data);

    expect(typeof convertedData).toBe('object');
    expect(convertedData).not.toEqual(data);
  });

  it('## should return a new array if data is an array', () => {
    const data = [
      {
        region: {
          S: 'Bahia',
        },
        meanings: {
          L: [
            {
              S: 'Sem problemas',
            },
            {
              S: 'Fique tranquilo',
            },
            {
              S: 'Esfriar a cabeça',
            },
          ],
        },
        dialect: {
          S: 'Relaxe mô fiu',
        },
      },
      {
        region: {
          S: 'Bahia',
        },
        meanings: {
          L: [
            {
              S: 'Interessante',
            },
            {
              S: 'Atrai a atenção ou desperta curiosidade',
            },
          ],
        },
        dialect: {
          S: 'É bala',
        },
      },
    ];

    const convertedData = convertRecordsToObject(data);

    expect(Array.isArray(convertedData)).toBe(true);
    expect(convertedData).not.toEqual(data);
  });

  it('## should return null if data is null', () => {
    const convertedData = convertRecordsToObject(null);
    expect(convertedData).toBeNull();
  });
});
