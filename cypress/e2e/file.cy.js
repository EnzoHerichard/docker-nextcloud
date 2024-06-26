describe('NextCloud File Presence Check', () => {

    const login = (username, password) => {
      cy.visit('http://localhost:8080')
      cy.get('input[name="user"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('button[type="submit"]').click()
    }
  
    it('should log in and check for specific files', () => {
      login('test', 'test')
  
      cy.get('h3').should('contain', 'Toucan.jpg')
  })
})