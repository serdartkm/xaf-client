import metaData from '../mock-data/mockMetaData';
import getNavigationFilter from '../getNavigationFilter';
describe('getNavigationFilter', () => {
  it('returns personType: false ', () => {
    const filter = getNavigationFilter({
      metaData,
      objectName: 'person',
      navigation: 'familyMember'
    });
    expect(filter).toStrictEqual({ personType: false });
  });
  it('returns personType: true ', () => {
    const filter = getNavigationFilter({
      metaData,
      objectName: 'person',
      navigation: 'employee'
    });
    expect(filter).toStrictEqual({ personType: true });
  });

  it.only('returns undefined ', () => {
    const filter = getNavigationFilter({
      metaData,
      objectName: 'application',
      navigation: 'employee'
    });
    expect(filter).toStrictEqual(undefined);
  });
});
