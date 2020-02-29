import metaData from '../../src/library/mock-data/mockMetaData';
import getObjectNames from '../../src/library/redux/ui-reducer/getObjectNames';
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  const objectNames = getObjectNames({ metaData });
  objectNames.forEach(objectName => {
    it(`User Clicked ${objectName} Navigation`, () => {
      cy.navigationClicked({ objectName });
    });
  });
   
});
