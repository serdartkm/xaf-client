import createObject from '../createObject';
jest.mock('../../store');
describe('createObject', () => {
  it('returns an object with all props and initial empty values', () => {
    expect(createObject({ objectName: 'employee' })).toEqual({
      firstName: '',
      lastName: '',
      birthDate: '',
      birthPlace: ''
    });
  });
});
