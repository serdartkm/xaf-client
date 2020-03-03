import getPropNames from '../../src/library/redux/ui-reducer/getPropNames';
import metaData from '../../src/library/mock-data/mockMetaData';

Cypress.Commands.add('listViewDisplay', ({ objectName }) => {
  describe('ListView', () => {
    it('TableHeader display', () => {
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
    });
  });
});

Cypress.Commands.add('newBtnClicked', ({ objectName }) => {
  cy.visit(`/${objectName}`);
  // cy.findAPICall({ objectName });
  cy.get(`[data-testid=new-${objectName}]`).click();
});
