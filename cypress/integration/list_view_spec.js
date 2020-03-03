import getPropNames from '../../src/library/redux/ui-reducer/getPropNames';
import getObjectNames from '../../src/library/redux/ui-reducer/getObjectNames';
import metaData from '../../src/library/mock-data/mockMetaData';
const objectNames = getObjectNames({ metaData });

describe('Table Header', () => {
  objectNames.forEach(objectName => {
    it(`Table header with all column  for ${objectName} are visible`, () => {
      cy.visit(`/${objectName}`);
      cy.findAPICall({ objectName });

      const propNames = getPropNames({ objectName, metaData });
      propNames.forEach(propName => {
        cy.get(`[data-testid=col-${propName}]`).should('be.visible');
        cy.get(`[data-testid=col-edit]`)
          .should('be.visible')
          .should('contain', 'Edit');
        cy.get(`[data-testid=col-delete]`)
          .should('be.visible')
          .should('contain', 'Delete');
      });
      cy.wait(50);
      it(`New link on ListView for ${objectName} is visible`, () => {
        cy.get(`[data-testid=new-${objectName}]`).should('contain', 'New');
      });
      it(`ObjectName for ${objectName} listview is visible`, () => {
        cy.get(`[data-testid=new-${objectName}]`).should('contain', 'New');
      });
    });
  });
});

describe('Table Body', () => {
  objectNames.forEach(objectName => {
    it(`Table data for ${objectName} with all columns and rows are visible`, () => {
      cy.visit(`/${objectName}`);
      cy.findAPICall({ objectName });
      // test initial redux state
      cy.window()
        .its('store')
        .invoke('getState')
        .its('list')
        .should('deep.equal', { list: [], error: null, finding: false });

      cy.fixture(`${objectName}.json`).then(items => {
        // test ui state
        cy.get('[data-testid=row-data]').should('have.length', items.length);
        //test redux state
        cy.window()
          .its('store')
          .invoke('getState')
          .its('list')
          .should('deep.equal', { list: items, error: null, finding: false });
      });

      cy.wait(50);
    });
  });
});
