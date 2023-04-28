/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render 20 character cards', () => {
    cy.get('[data-cy="character-card"]').should('have.length', 20);
  });

  it('Should show loader when search character', () => {
    cy.intercept(
      { url: 'https://rickandmortyapi.com/api/character/**', middleware: true },
      (req) => {
        req.on('response', (res) => {
          res.setDelay(500);
        });
      }
    );

    cy.get('[data-cy="character-search"]').type('smith');
    cy.get('[data-cy="submit-search"]').submit();
    cy.get('[data-cy="loader"]').should('be.visible');
  });

  it('Should show "Name does not exist" when search wrong character name', () => {
    cy.get('[data-cy="character-search"]').type('will');
    cy.get('[data-cy="submit-search"]').submit();
    cy.get('[data-cy="wrong-name"]').should('be.visible');
  });

  it('Should open modal of the second card and then close it by click on cross', () => {
    cy.get('[data-cy="character-card"]').eq(1).click();
    cy.get('[data-cy="modal"]').should('be.visible');
    cy.get('[data-cy="close"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');
  });
});
