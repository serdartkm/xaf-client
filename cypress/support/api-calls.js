Cypress.Commands.add('findAPICall', ({ objectName }) => {
  cy.fixture(`${objectName}.json`);
  cy.server();
  cy.route(
    'GET',
    `http://localhost:8000/find?document=${objectName}`,
    `fixture:${objectName}.json`
  );
});

Cypress.Commands.add('saveAPICall', ({objectName,body}) => {
  cy.server();
  cy.route({});
});
