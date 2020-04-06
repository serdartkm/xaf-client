import validationMessages from '../../../src/form/validationMessages';

describe('ChangePassword', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      url:
        'http://localhost:8000/auth/changepass?password=DragondFFFly!2324.&confirm=tkm.house@gmail.com',
      response: { token: '123' }
    }).as('changepassSuccess');
  });
  it.only('success password change');
  it('passwordInvalid client');
  it('password do not match client');
  it('passwordDoNotMatch 412 server');
  it('passwordInvalid 406 server');
});
