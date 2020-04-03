describe('Login', () => {
  it('Login Success', () => {
   // cy.server();
    // cy.route({
    //   url:
    //     'http://localhost:8000/login?password=DragondFFFly!2324.&emailorusername=tkm.house@gmail.com',
    //   response: { token: '123' }
    // }).as('login');
    cy.visit('http://localhost:3000');

    cy.get('[data-testid=bar-tool-Authentication]').click();
    cy.get('[data-testid=login]').click();
    cy.get('[data-testid=emailOrUsername]')
      .type('tkm.house@gmail.com')
      .get('[data-testid=password]')
      .type('DragondFFFly!2324.')
      .get('[data-testid=login-btn]')
      .click();
  });
});
