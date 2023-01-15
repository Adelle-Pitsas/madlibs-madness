describe('the favorites view', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept('http://localhost:3001/madlibs/favorites', {
      method: "GET",
      fixture: '../fixtures/favorites.json'
    })
    cy.get('.favorites-link').click()
  })


  it('should display the header and nav button', () => {
    cy.get('.header').should('contain', "Mobile MadLibs").within(() => {
      cy.get('.nav-button').should('contain', "Home")
    })
  })

  it('should display the favorites', () => {
    cy.get('.fav-card').eq(0).should('contain', "You have brains in your notebook. You have head in your shoes. You can run yourself in any direction you choose. -Dr. Seuss").within(() => {
      cy.get('.favorited').should('have.css', 'fill', 'rgb(246, 226, 0)')
    })
    cy.get('.fav-card').eq(1).should('contain', "We accept the table we think we deserve ― Stephen Chbosky").within(() => {
      cy.get('.favorited').should('have.css', 'fill', 'rgb(246, 226, 0)')
    })
  })

  it('should allow the user to go to the home page', () => {
    cy.get('.nav-button').click()
    cy.get('.home-page-options').should('be.visible')
  })

  // it('should allow the user to delete a favorite from the list', () => {
  //   cy.intercept({
  //     method: 'DELETE',
  //     url: 'http://localhost:3001/madlibs/favorites/1673813089855'}, 
  //     [
  //       {
  //       "id": 1673813089855,
  //       "quote": "We accept the table we think we deserve ― Stephen Chbosky",
  //       "isFavorited": true
  //     }
  //   ])
  //   cy.get('.favorite-button').eq(0).click()
  // })
})

describe('A failed GET request for favorites', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept(
      "http://localhost:3001/madlibs/favorites",
      {
        method: "GET",
      },
      {
        statusCode: 500,
      }
    );
    cy.get('.favorites-link').click()
  })

  it("should display an error pop-up", () => {
    cy.get('.overlay').should('be.visible')
    cy.get('.error-container').should('be.visible')
    .and('contain', 'Oops! Something went wrong!')
    .and('contain', 'Please try again later')
    .within(() => {
      cy.get('.dismiss-btn').should('be.visible')
    })
  })

  it('should allow the user to close the popup', () => {
    cy.get('.dismiss-btn').click()
    cy.get('.overlay').should('not.exist')
    cy.get('.error-container').should('not.exist')
  })
})