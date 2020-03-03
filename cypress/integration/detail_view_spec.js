import getPropNames from '../../src/library/redux/ui-reducer/getPropNames';
import getObjectNames from '../../src/library/redux/ui-reducer/getObjectNames';
import metaData from '../../src/library/mock-data/mockMetaData';
import createObjectHelder from '../../src/library/redux/detail-ui-reducer/createObjectHelper';
import getFieldsMetaData from '../../src/library/redux/detail-ui-reducer/getFieldsMetaData';
const objectNames = getObjectNames({ metaData });

describe('User Clicked New Button', () => {
  objectNames.forEach(objectName => {
    it(`Test for ${objectName} detail and detailUi initial state passed`, () => {
      cy.userClickedNewBtn({ objectName });

      //testin url
      cy.url().should('include', `/edit/${objectName}`);

      //testing detail state
      cy.window()
        .its('store')
        .invoke('getState')
        .its('detail')
        .should('deep.equal', createObjectHelder({ objectName, metaData }));

      //testing detailUi state
      cy.window()
        .its('store')
        .invoke('getState')
        .its('detailUi')
        .should('deep.equal', {
          fieldMetaData: getFieldsMetaData({ objectName, metaData })
        });
    });
  });
});

describe('User Enters input data', () => {
  objectNames.forEach(objectName => {
    it(`detail state for ${objectName} fields changes accordingly`, () => {
      cy.userClickedNewBtn({ objectName });
      const fields = getFieldsMetaData({ metaData, objectName });
      cy.userEntersInputData({ fields });
    });
  });
});
describe('User clicked Save button', () => {
  objectNames.forEach(objectName => {
    it.only(`list and detail state for${objectName} updated`, () => {
      cy.userClickedNewBtn({ objectName });
      const fields = getFieldsMetaData({ metaData, objectName });
      cy.userEntersInputData({ fields });
    });
  });
});

describe('User clicked Save and Close button', () => {});

describe('User clicked Delete button', () => {});

describe('User clicked Cancel button', () => {});
