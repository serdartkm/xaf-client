import getObjectNames from '../getObjectNames';
import mockMetaData from './mockMetaData';
describe('getObjectNames', () => {
  it('return all object names as an array', () => {
    expect(getObjectNames({ metaData: mockMetaData })).toEqual([
      'employee',
      'passport',
      'visa'
    ]);
  });
});
