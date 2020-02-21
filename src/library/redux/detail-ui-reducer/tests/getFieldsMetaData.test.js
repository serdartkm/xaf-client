import getFieldsMetaData from '../getFieldsMetaData';
import mockData from '../../../mock-data/mockMetaData';
describe('getFieldsMetaData', () => {
  it('return correct fields metadata', () => {
    expect(
      getFieldsMetaData({ metaData: mockData, objectName: 'employee' })
    ).toEqual([
      { name: 'firstName', placeholder: 'Enter firstname', type: 'text' },
      { name: 'lastName', placeholder: 'Enter lastname', type: 'text' },
      { name: 'birthDate', type: 'date' },
      { name: 'birthPlace', placeholder: 'Enter place of birth', type: 'text' }
    ]);
  });
});
