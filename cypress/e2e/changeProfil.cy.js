describe('Profile Update', () => {
    before(() => {
      // Connexion avant de tester le changement de profil
      cy.visit('http://localhost:8080')
      cy.get('input[name="user"]').type("test")
      cy.get('input[name="password"]').type("test")
      cy.get('button[type="submit"]').click()
    });
  
    it('should update profile information', () => {
      cy.get('.user-menu > button').click();
      cy.get('#profile').click();
      cy.url().should('include', '/u/');

      cy.get('#app-content-vue > div.profile__header > div > div.profile__header__container__displayname > a').click()
  
      cy.get('input[id="account-property-displayname"]').clear().type('New');
      cy.get('input[id="account-property-displayname"]').should('have.value', 'New');
  
    });
  });
  