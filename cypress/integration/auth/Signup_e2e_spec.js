import validationMessages from '../../../src/form/validationMessages';
describe('Signup e2e', () => {
  before(() => {
    cy.task('seed:signup', {});
  });

  it('success', () => {
    cy.visit('http://localhost:3000/auth/signup');
    cy.get('[data-testid=username]').type('lionardo');
    cy.get('[data-testid=email]').type('lionardo@gmail.com');
    cy.get('[data-testid=password]')
      .type('Dragonfly1978.')
      .get('[data-testid=signup-btn]')
      .click();
    cy.get('[data-testid=welcome]').contains('Welcome, lionardo@gmail.com');
  });

  it('username is taken, email is registered', () => {
    cy.visit('http://localhost:3000/auth/signup');
    cy.get('[data-testid=username]').type('lionardo');
    cy.get('[data-testid=email]').type('lionardo@gmail.com');
    cy.get('[data-testid=password]')
      .type('Dragonfly1978.')
      .get('[data-testid=signup-btn]')
      .click();

    cy.get('[data-testid=message-username]').contains(
      validationMessages.USERNAME_TAKEN
    );
    cy.get('[data-testid=message-email]').contains(
      validationMessages.REGISTERED_EMAIL
    );
  });

  it('invalid username, email,password (empty fields)', () => {
    cy.visit('http://localhost:3000/auth/signup');
    cy.get('[data-testid=signup-btn]').click();
    cy.get('[data-testid=message-username]').contains(
      validationMessages.INVALID_USERNAME
    );
    cy.get('[data-testid=message-email]').contains(
      validationMessages.INVALID_EMAIL
    );
    cy.get('[data-testid=message-password]').contains(
      validationMessages.INVALID_PASSWORD
    );
  });

  it('invalid username, email,password (invalid field values types)', () => {
    cy.visit('http://localhost:3000/auth/signup');

    cy.get('[data-testid=username]').type('123');
    cy.get('[data-testid=email]').type('lionardogmail.com');
    cy.get('[data-testid=password]').type('159357');
    cy.get('[data-testid=signup-btn]').click();
    cy.get('[data-testid=message-username]').contains(
      validationMessages.INVALID_USERNAME
    );
    cy.get('[data-testid=message-email]').contains(
      validationMessages.INVALID_EMAIL
    );
    cy.get('[data-testid=message-password]').contains(
      validationMessages.INVALID_PASSWORD
    );
  });
});
