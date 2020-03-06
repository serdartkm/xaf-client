import getFieldsMetaData from '../../src/library/redux/detail-ui-reducer/getFieldsMetaData';
import metaData from '../../src/library/mock-data/mockMetaData';
Cypress.Commands.add('userEntersInputData', ({ field }) => {
  let state = {};
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

Cypress.Commands.add('userClickedNewBtn', ({ objectName }) => {

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
});

Cypress.Commands.add('userClickedSaveButton', ({ objectName, btnType }) => {
 

  if (btnType === 'save') {
    cy.get('[data-testid=save-btn]').click();
  } else {
    cy.get('[data-testid=save-close-btn]').click();
  }


});
