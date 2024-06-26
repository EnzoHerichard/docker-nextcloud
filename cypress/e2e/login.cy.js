describe('NextCloud Login', () => {
    it('should navigate to the login page and perform login', () => {
      cy.visit('http://localhost:8080')
      cy.get('input[name="user"]').type('test')
      cy.get('input[name="password"]').type('test')
      cy.get('button[type="submit"]').click()
    })
  })
  