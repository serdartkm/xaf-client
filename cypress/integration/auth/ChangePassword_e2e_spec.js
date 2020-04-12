import validationMessages from '../../../src/form/validationMessages';

describe('ChangePassword_e2e_spec', () => {
  beforeEach(() => {
    // cy.task('seed:login', {
    //   email: 'test@gmail.com',
    //   username: 'tkmhousenew',
    //   password: 'Dragonfly1922!!',
    // });
  });
  it('Success ChangePassword with token', () => {
    cy.visit('http://localhost:3000/auth/login');
    cy.get('[data-testid=emailOrUsername]').type('test@gmail.com');
    cy.get('[data-testid=password]').type('Dragonfly1922!!');
    cy.get('[data-testid=login-btn]').click();
    cy.wait(1000);
    cy.get('[data-testid=change-password]').click();
    cy.get('[data-testid=password]').type('Dragonfly1933!!');
    cy.get('[data-testid=confirm]').type('Dragonfly1933!!');
    cy.get('[data-testid=change-pass-btn]').click();
  });
  it('ChangePassword failed passwordmismatch with token', () => {
    cy.visit('http://localhost:3000/auth/login');
    cy.get('[data-testid=emailOrUsername]').type('test@gmail.com');
    cy.get('[data-testid=password]').type('Dragonfly1922!!');
    cy.get('[data-testid=login-btn]').click();
    cy.wait(1000);
    cy.get('[data-testid=change-password]').click();
    cy.get('[data-testid=password]').type('Dragonfly1933!!');
    cy.get('[data-testid=confirm]').type('Dragonfly1933!');
    cy.get('[data-testid=change-pass-btn]').click();
    cy.get('[data-testid=message-confirm]').contains(
      validationMessages.PASSWORDS_DO_NOT_MATCH
    );
  });
  it('ChangePassword failed invalidCredentials (not registered username)', () => {
    cy.visit('http://localhost:3000/auth/changepassword');
    cy.get('[data-testid=emailorusername]').type('tkmhouse');
    cy.get('[data-testid=current]').type('Dragonfly1922!!');
    cy.get('[data-testid=password]').type('Dragonfly1988_!');
    cy.get('[data-testid=confirm]').type('Dragonfly1988_!');
    cy.get('[data-testid=change-pass-btn]').click();
  });
  it('ChangePassword failed invalidCredentials (not registered email)', () => {
    cy.visit('http://localhost:3000/auth/changepassword');
    cy.get('[data-testid=emailorusername]').type('tkmhouse@gmail.com');
    cy.get('[data-testid=current]').type('Dragonfly1922!!');
    cy.get('[data-testid=password]').type('Dragonfly1988_!');
    cy.get('[data-testid=confirm]').type('Dragonfly1988_!');
    cy.get('[data-testid=change-pass-btn]').click();
  });

  it('ChangePassword failed invalidCredentials (not registered email)', () => {
    cy.visit('http://localhost:3000/auth/changepassword');
    cy.get('[data-testid=emailorusername]').type('tkmhouse@gmail.com');
    cy.get('[data-testid=current]').type('Dragonfly1922!!');
    cy.get('[data-testid=password]').type('Dragonfly1988_!');
    cy.get('[data-testid=confirm]').type('Dragonfly1988_!');
    cy.get('[data-testid=change-pass-btn]').click();
  });

  it.only('ChangePassword failed invalidCredentials (wrong password)', () => {
    cy.visit('http://localhost:3000/auth/changepassword');
    cy.get('[data-testid=emailorusername]').type('test@gmail.com');
    cy.get('[data-testid=current]').type('Dragonfly1922!!');
    cy.get('[data-testid=password]').type('Dragonfly1988_!');
    cy.get('[data-testid=confirm]').type('Dragonfly1988_!');
    cy.get('[data-testid=change-pass-btn]').click();
  });
});
