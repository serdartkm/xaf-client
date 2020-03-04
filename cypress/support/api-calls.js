Cypress.Commands.add('findAPICall', ({ objectName }) => {
  cy.fixture(`${objectName}.json`);
  cy.server();
  cy.route(
    'GET',
    `http://localhost:8000/find?document=${objectName}`,
    `fixture:${objectName}.json`
  );
});

Cypress.Commands.add('saveAPICall', ({ objectName }) => {
  cy.server({ method: 'POST' });
  cy.route({
    url: `http://localhost:8000/insertOne?document=${objectName}`,
    response: { _id: '1234' },
    status: 201
  }).as(objectName);
});
