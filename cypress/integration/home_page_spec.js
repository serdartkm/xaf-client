describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/',{
        onBeforeLoad: win => {
            win.initialState = todos
          }
      }) // change URL to match your dev URL
    })
  })