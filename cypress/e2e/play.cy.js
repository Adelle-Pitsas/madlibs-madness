describe('play view', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    cy.intercept('http://localhost:3001/madlibs', {
      method: "GET",
      fixture: '../fixtures/madlib.json'
    })
    cy.get('.play-link').click()

  })
  it('should display the header with the title and navigation button', () => {
    cy.get('.header').should('contain', 'Mobile MadLibs')
    .within(() => {
      cy.get('.nav-button').should('contain', "See Favorites")
    })
  })

  it('should display the inputs and button within the play area', () => {
    cy.get('.mad-lib-entry').within(() => {
      cy.get('h3').should('contain', "Play!")
      cy.get('input').eq(0).should('have.value', "")
      cy.get('input').eq(1).should('have.value', "")
      cy.get('.submit-word-btn').eq(0).should('contain', "Submit Word")
      cy.get('.submit-word-btn').eq(1).should('contain', "Submit Word")
    })
  })

  it('should allow a user to type in words and submit them to see their madlib', () => {
    cy.get('input').eq(0).type("stars").should('have.value', "stars")
    cy.get('.submit-word-btn').eq(0).click()
    cy.get('.submit-word-btn').eq(1).should('not.exist')
    cy.get('input').eq(0).should('be.disabled')
    cy.get('input').eq(1).type("flying").should('have.value', "flying")
    cy.get('.submit-word-btn').eq(0).click().should('not.exist')
    cy.get('input').eq(1).should('be.disabled')
    cy.get('.submit').should('be.visible').click().should('not.exist')
    cy.get('.result-container').should('be.visible')
    .and('contain', 'The way to get stars is to quit talking and begin flying')
    .within(() => {
      cy.get('.unfavorited').should('have.css', 'fill', 'rgb(95, 95, 95)')
    })
  })

  it('should allow a user to favorite their madlib', () => {
    cy.get('input').eq(0).type("stars")
    cy.get('.submit-word-btn').eq(0).click()
    cy.get('input').eq(1).type("flying")
    cy.get('.submit-word-btn').eq(0).click()
    cy.get('.submit').click()
    cy.intercept('POST', 'http://localhost:3001/madlibs/favorites', {
      body: {
        quote: "The way to get stars is to quit talking and begin flying",
        isFavorited: true
      }
    })
    cy.get('.result-container').should('contain', 'The way to get stars is to quit talking and begin flying')
    .within(() => {
      cy.get('.unfavorited').should('have.css', 'fill', 'rgb(95, 95, 95)')
      .click()
      cy.get('.favorited').should('have.css', 'fill', 'rgb(246, 226, 0)')
    })
  })

  it('should allow a user to display a new madlib form', () => {
    cy.intercept('http://localhost:3001/madlibs', {
      method: "GET",
      fixture: '../fixtures/anotherMadlib.json'
    })
    cy.get('.new-madlib-button').click()
    cy.get('input').eq(0).should('have.value', "")
    cy.get('input').eq(1).should('have.value', "")
    cy.get('input').eq(2).should('have.value', "")
    cy.get('.submit-word-btn').eq(0).should('contain', "Submit Word")
    cy.get('.submit-word-btn').eq(1).should('contain', "Submit Word")
    cy.get('.submit-word-btn').eq(2).should('contain', "Submit Word")
  })
})