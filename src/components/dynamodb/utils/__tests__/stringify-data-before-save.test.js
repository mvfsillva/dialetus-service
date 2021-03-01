/* eslint-disable max-lines */
import { stringify } from '../stringify-data-before-save';

describe('# Components - DYNAMODB - stringify', () => {
  it('## should convert a object in PartiQL format', () => {
    const data = {
      uf: 'BA',
      label: 'Bahia',
      draft: true,
    };

    const convertedData = stringify(data);

    expect(typeof convertedData).toBe('string');
    expect(convertedData).toBe("{'uf':'BA','label':'Bahia','draft':true}");
  });
});
