describe('Fetch Navigation from server', () => {
  it('visa app', () => {
    cy.server();
    cy.route(
      'GET',
      `http://localhost:8000/navigations?appName=visa`,
      'fixture:visanav'
    ).as('visa');
    cy.route(
      'GET',
      `http://localhost:8000/navigations?appName=stock`,
      'fixture:stocknav'
    ).as('stock');
    cy.visit('http://localhost:3000');

    cy.wait('@visa')
      .its('url')

      .debug();
    // cy.get('@visa')
  });
});
