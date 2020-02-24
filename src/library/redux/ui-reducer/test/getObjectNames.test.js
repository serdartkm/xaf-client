import mockData from '../../../mock-data/mockMetaData';
import getObjectNames from '../getObjectNames';

describe('getObjectNames', () => {
  it('return all object names as an array', () => {
    expect(getObjectNames({ metaData: mockData })).toEqual([
      'employee',
      'passport',
      'visa'
    ]);
  });
});
