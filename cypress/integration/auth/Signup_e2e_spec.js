describe('Signup e2e', () => {
  it.skip('success', () => {
    cy.visit('http://localhost:3000/auth/signup');
    cy.get('[data-testid=username]').type('lionardo');
    cy.get('[data-testid=email]').type('lionardo@gmail.com');
    cy.get('[data-testid=password]')
      .type('Dragonfly1978.')
      .get('[data-testid=signup-btn]')
      .click();
  });

  it('run task', () => {
    cy.task('seed:login', { email: 'test@gmail.com', username: 'tkmhousenew',password:'Dragonfly1922!!' });
  });
});
