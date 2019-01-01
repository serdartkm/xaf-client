describe('ChangePassword_e2e_spec',()=>{
    beforeEach(() => {
        cy.task('seed:login', {
          email: 'test@gmail.com',
          username: 'tkmhousenew',
          password: 'Dragonfly1922!!',
        });
      });
    it('Success ChangePassword',()=>{
        cy.visit('http://localhost:3000/auth/login')
        cy.get('[data-testid=emailOrUsername]').type('test@gmail.com')
        cy.get('[data-testid=password]').type('Dragonfly1922!!')
        cy.get('[data-testid=login-btn]').click()
        cy.wait(1000)
        cy.get('[data-testid=change-password]').click()
        cy.get('[data-testid=password]').type('Dragonfly1933!!')
        cy.get('[data-testid=confirm]').type('Dragonfly1933!!')
        cy.get('[data-testid=change-pass-btn]').click()
    })
})