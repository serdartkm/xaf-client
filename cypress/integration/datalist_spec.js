describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.server();
    cy.route(
      'GET',
      `http://localhost:8000/find?document=birthCountry`,
      'fixture:country'
    ).as('birthCounry');
    cy.route(
      'GET',
      `http://localhost:8000/find?document=gender`,
      'fixture:gender'
    ).as('gender');
    cy.visit('http://localhost:3000');
    cy.contains('CRUD').click();
    cy.get('[data-testid="person"]').click();
    cy.get('[data-testid="new"]').click();
    // cy.get('[data-testid="dropdown-input-gender"]').focus();
    // cy.wait(1000);
    // cy.get('[data-testid="dropdown-input-birthCountry"]').focus();
    // cy.wait('@birthCounry');

    // cy.window()
    //   .its('store')
    //   .invoke('getState')
    //   .debug();
  });
});
