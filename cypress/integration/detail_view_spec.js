import getObjectNames from '../../src/library/redux/ui-reducer/getObjectNames';
import getPropNames from '../../src/library/redux/ui-reducer/getPropNames';
import metaData from '../../src/library/mock-data/mockMetaData';
import createObjectHelder from '../../src/library/redux/detail-ui-reducer/createObjectHelper';
import getFieldsMetaData from '../../src/library/redux/detail-ui-reducer/getFieldsMetaData';
const objectNames = getObjectNames({ metaData });

describe('User Clicked New Button on ListView', () => {
  objectNames.forEach(objectName => {
    it(`initial state for ${objectName} object is set (detailReducer)`, () => {
      cy.userClickedNewBtn({ objectName });
      cy.window()
        .its('store')
        .invoke('getState')
        .its('detail')
        .should('deep.equal', createObjectHelder({ objectName, metaData }));
    });
    it(`initial state for ${objectName} detail ui is set (detailUiReducer)`, () => {
      cy.userClickedNewBtn({ objectName });
      cy.window()
        .its('store')
        .invoke('getState')
        .its('detailUi')
        .should('deep.equal', {
          fieldMetaData: getFieldsMetaData({ objectName, metaData })
        });
    });
    it(` url for ${objectName} DetailView should include /edit/${objectName}`, () => {
      cy.userClickedNewBtn({ objectName });
      cy.url().should('include', `/edit/${objectName}`);
    });

    it(` ui controls for ${objectName} on DetailView are visible`, () => {
      const propNames = getPropNames({ objectName, metaData });
      cy.userClickedNewBtn({ objectName });
      propNames.forEach(propName => {
        cy.get([`[data-testid=${propName}]`]);
      });
      cy.get('[data-testid=save-btn').should('be.visible');
      cy.get('[data-testid=save-close-btn').should('be.visible');
      cy.get('[data-testid=cancel-btn').should('be.visible');
      cy.get('[data-testid=delete-btn').should('be.visible');
    });
  });
});

describe('User Enters input data', () => {
  objectNames.forEach(objectName => {
    const fields = getFieldsMetaData({ metaData, objectName });
    describe(` User enters data for ${objectName}`, () => {
      before(() => {
        cy.userClickedNewBtn({ objectName });
      });

      fields.forEach(field => {
        it(`user entered value into ${field.name} input`, () => {
          cy.userEntersInputData({ field });
        });
        it(`state for ${field.name} has changed (detailReducer)`, () => {
          cy.window()
            .its('store')
            .invoke('getState')
            .its('detail')
            .then(obj => {
              if (field.type === 'text') {
                expect(obj[field.name]).to.equal(field.name);
              }
              if (field.type === 'date') {
                expect(obj[field.name]).to.equal('2009-12-12');
              }
            });
        });
      });

      describe(` user clicked save and close button for ${objectName}`, () => {
        before(()=>{
          cy.userClickedSaveButton({ objectName, btnType: 'save-and-close' });
        })
        it(`list and detail state for ${objectName} updated`, () => {
         cy.window().its('store').invoke('getState').debug()
        });
      });
    });
  });
});


describe('User clicked Save button', () => {});

describe('User clicked Delete button', () => {});

describe('User clicked Cancel button', () => {});
