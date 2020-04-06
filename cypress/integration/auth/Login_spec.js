import validationMessages from '../../../src/form/validationMessages';
describe('Login', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      url:
        'http://localhost:8000/auth/login?password=DragondFFFly!2324.&emailorusername=tkm.house@gmail.com',
      response: { token: '123' }
    }).as('loginSuccess');
    cy.route({
      url:
        'http://localhost:8000/auth/login?password=DragondFFFly!&emailorusername=tkm.house.old@gmail.com',
      status: 400,
      response: { errors: ['401'] }
    }).as('loginInvalidCreden401');
    cy.route({
      url:
        'http://localhost:8000/auth/login?password=DragondFFFly!&emailorusername=2333',
      status: 400,
      response: { errors: ['410'] }
    }).as('emailorusernameNotValid');
    cy.route({
      url:
        'http://localhost:8000/auth/login?password=&emailorusername=tkm.house.old@gmail.com',
      status: 400,
      response: { errors: ['409'] }
    }).as('emptyStringNotValid');
    cy.route({
      url:
        'http://localhost:8000/auth/login?password=DragonProp!&emailorusername=tkm.house.temp@gmail.com',
      status: 400,
      response: { errors: ['408'] }
    }).as('emailIsNotRegistered');
    cy.route({
      url:
        'http://localhost:8000/auth/login?password=DragonNotRegis&emailorusername=tkmhousenew',
      status: 400,
      response: { errors: ['411'] }
    }).as('usernameIsNotRegistered');
    cy.visit('http://localhost:3000');
    cy.get('[data-testid=bar-tool-Authentication]').click();
    cy.get('[data-testid=login]').click();
  });
  it('Login Success', () => {
    cy.get('[data-testid=login]').click();
    cy.get('[data-testid=emailOrUsername]')
      .type('tkm.house@gmail.com')
      .get('[data-testid=password]')
      .type('DragondFFFly!2324.')
      .get('[data-testid=login-btn]')
      .click();
    cy.get('[data-testid=welcome]').contains('Welcome, tkm.house@gmail.com');
  });

  it('invalid usernameoremail and password client', () => {
    cy.get('[data-testid=emailOrUsername]')
      .type('1232343')
      .blur()
      .get('[data-testid=message-emailorusername]')
      .contains(validationMessages.INVALID_USERNAME_OR_EMAIL);

    cy.get('[data-testid=password]')
      .focus()
      .blur()
      .get('[data-testid=message-password]')
      .contains(validationMessages.INVALID_EMPTY_STRING);
  });
  it('empty emailorusername client', () => {
    cy.get('[data-testid=emailOrUsername]')
      .focus()
      .blur()
      .get('[data-testid=message-emailorusername]')
      .contains(validationMessages.INVALID_USERNAME_OR_EMAIL);
  });
  it('invalid credentials 401 server', () => {
    cy.get('[data-testid=emailOrUsername]')
      .type('tkm.house.old@gmail.com')
      .get('[data-testid=password]')
      .type('DragondFFFly!')
      .get('[data-testid=login-btn]')
      .click();
    cy.get('[data-testid=message-emailorusername]').contains(
      validationMessages.INVALID_CREDENTIALS
    );
    cy.get('[data-testid=message-password]').contains(
      validationMessages.INVALID_CREDENTIALS
    );
  });
  it('emailorusernameNotValid 410 server', () => {
    cy.get('[data-testid=emailOrUsername]')
      .type('2333')
      .get('[data-testid=password]')
      .type('DragondFFFly!')
      .get('[data-testid=login-btn]')
      .click();
    cy.get('[data-testid=message-emailorusername]').contains(
      validationMessages.INVALID_USERNAME_OR_EMAIL
    );
  });
  it('emptyStringNotValid(password) 409  server', () => {
    cy.get('[data-testid=emailOrUsername]')
      .type('tkm.house.old@gmail.com')
      .get('[data-testid=password]');
    cy.get('[data-testid=login-btn]').click();
    cy.get('[data-testid=message-password]').contains(
      validationMessages.INVALID_EMPTY_STRING
    );
  });
  it('emailIsNotRegistered 408 server', () => {
    cy.get('[data-testid=emailOrUsername]')
      .type('tkm.house.temp@gmail.com')
      .get('[data-testid=password]')
      .type('DragonProp!')
      .get('[data-testid=login-btn]')
      .click();
    cy.get('[data-testid=message-emailorusername]').contains(
      validationMessages.EMAIL_NOT_REGISTERED
    );
  });

  it('usernameIsNotRegistered 411 server', () => {
    cy.get('[data-testid=emailOrUsername]')
      .type('tkmhousenew')
      .get('[data-testid=password]')
      .type('DragonNotRegis')
      .get('[data-testid=login-btn]')
      .click();
    cy.get('[data-testid=message-emailorusername]').contains(
      validationMessages.USERNAME_NOT_REGISTERED
    );
  });
});
