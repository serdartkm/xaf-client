import createObject from '../createObject';
import metaData from '../../../mock-data/mockMetaData';
describe('createObject', () => {
  it('returns an object with all props and initial empty values', () => {
    expect(createObject({ objectName: 'employee', metaData })).toEqual({
      firstName: '',
      lastName: '',
      birthDate: '',
      birthPlace: ''
    });
  });
});
