


Cypress.Commands.add('navigationClicked', ({ objectName }) => {
  cy.fixture(`${objectName}.json`).then(list => {
    cy.server();
    cy.route(
      'GET',
      `http://localhost:8000/find?document=${objectName}`,
      list
    ).as('objectname');

    cy.get(`[data-testid=nav-${objectName}]`).click();

    cy.get(`[data-testid=row]`).should('have.length', list.length);
    cy.window()
      .its('store')
      .invoke('getState')
      .its('list')
      .its('list')
      .should('have.length', list.length);
  });
});
