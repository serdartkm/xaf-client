import getPropNames from '../getPropNames';
import mockMetaData from './mockMetaData'
describe('getPropNames', () => {
  it('returns corrent objec prop names', () => {

    expect(getPropNames({ objectName: 'employee', metaData:mockMetaData })).toEqual([
      'firstName',
      'lastName',
      'birthDate',
      'birthPlace'
    ]);
  });
});
