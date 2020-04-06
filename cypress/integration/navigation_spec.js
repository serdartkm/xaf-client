describe('Fetch Navigation from server', () => {
  it('visa app', () => {
    cy.server();
    cy.route({
      url: '/list?document=employee&appName=visa',
      response: [{}],
      status: 200
    });
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=bar-tool-visa]').click();
    cy.get('[data-testid=nav-item-employee]')
      .first()
      .click();
  });
});
