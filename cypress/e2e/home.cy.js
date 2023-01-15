describe('homepage view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the headers and instructions', () => {
    cy.get('.header').should('contain', "Mobile MadLibs")
    cy.get('.secondary-banner').should('contain', "Click 'Play' to put your own spin on the same old overused famous quotes")
  })

  it('should display play and favorites options', () => {
    cy.get('.home-page-options').within(() => {
      cy.get('.play-link').should('contain', "Play!").within(() => {
        cy.get('img').should('be.visible')
      })
      cy.get('.favorites-link').should('contain', "Favorites").within(() => {
        cy.get('img').should('be.visible')
      })
    })
  })

  describe('Page not found view', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/potato')
    })
    it('should display an error when an incorrect url is used', () => {
      cy.get('.not-found-container').should('be.visible')
      .and('contain', "Oops! This page doesn't exist")
      .and('contain', "Check the url and try again ~OR~Click the button below to be brought back to the home page")
      .within(() => {
        cy.get('.go-home-btn')
      })
    })

    it('should allow user to navigate back to home page', () => {
      cy.get('.go-home-btn').click()
      cy.get('.home-page-options').should('be.visible')
    })
  })
})