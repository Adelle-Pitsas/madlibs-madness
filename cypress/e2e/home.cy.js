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

})