import createObjectHelper from '../createObjectHelper';
import mockData from '../../../mock-data/mockMetaData';
describe('createObjectHelper', () => {
  it('returns an object with all props and initial empty values', () => {
    expect(
      createObjectHelper({ objectName: 'employee', metaData: mockData })
    ).toEqual({
      firstName: '',
      lastName: '',
      birthDate: '',
      birthPlace: ''
    });
  });
});
