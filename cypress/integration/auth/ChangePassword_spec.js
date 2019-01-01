import validationMessages from '../../../src/form/validationMessages';

describe('ChangePassword', () => {
  describe('change password with token', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        url: 'http://localhost:8000/auth/changepass',
        method: 'PUT',
        response: []
      }).as('changepassSuccess');
      cy.visit('http://localhost:3000/auth/changepassword?token=1234');
    });
    it('passwordDoNotMatch client', () => {
      cy.get('[data-testid=password]')
        .type('Dragonfly200!')
        .blur();
      cy.get('[data-testid=confirm]')
        .type('Dragonfly200!_')
        .blur();
      cy.get('[data-testid=message-confirm]').contains(
        validationMessages.PASSWORDS_DO_NOT_MATCH
      );
      //cy.get('[data-testid=change-pass-btn]').click();
    });
    it('passwordInvalid client', () => {
      cy.get('[data-testid=password]')
        .type('Dragos')
        .blur()
        .get('[data-testid=message-password]')
        .contains(validationMessages.INVALID_PASSWORD);
    });
    it.only('tokenExpired client', () => {});
    it('passwordDoNotMatch 412 server', () => {});
    it('passwordInvalid 406 server', () => {});
    it('tokenExpired 413 server', () => {});
  });
});
