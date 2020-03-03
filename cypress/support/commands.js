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

Cypress.Commands.add('navigationClicked', ({ objectName }) => {
  cy.fixture(`${objectName}.json`).then(list => {
    cy.server();
    cy.route(
      'GET',
      `http://localhost:8000/find?document=${objectName}`,
      list
    ).as('objectname');

    cy.get(`[data-testid=nav-${objectName}]`).click();
    cy.url().should('include', `/${objectName}`);

    cy.get(`[data-testid=row-data]`).should('have.length', list.length);
    cy.window()
      .its('store')
      .invoke('getState')
      .its('list')
      .its('list')
      .should('have.length', list.length);
  });

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

Cypress.Commands.add('findAPICall', ({ objectName }) => {
  cy.fixture(`${objectName}.json`);
  cy.server();
  cy.route(
    'GET',
    `http://localhost:8000/find?document=${objectName}`,
    `fixture:${objectName}.json`
  );
});

Cypress.Commands.add('userEntersInputData', ({ fields }) => {
  let state = {};
  fields.forEach(field => {
    switch (field.type) {
      case 'text':
        cy.get(`input[name="${field.name}"]`)
          .type(`${field.name}`)
          .type('{enter}');
        state[field.name] = `${field.name}`;
        break;
      case 'date':
        cy.get(`input[name="${field.name}"]`)
          .type('2009-12-12')
          .should('have.value', '2009-12-12');
        state[field.name] = '2009-12-12';
        break;
      default:
        cy.get(`input[name="${field.name}"]`)
          .type(`${field.name}`)
          .type('{enter}');
        state[field.name] = `${field.name}`;
    }
  });

  cy.window()
    .its('store')
    .invoke('getState')
    .its('detail')
    .should('deep.equal', state);
});

Cypress.Commands.add('userClickedNewBtn', ({ objectName }) => {
  cy.visit(`/${objectName}`);
  cy.findAPICall({ objectName });
  cy.get(`[data-testid=new-${objectName}]`).click();
});
