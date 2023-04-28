/// <reference types="cypress" />

describe('Not found page', () => {
  it('Show Not found page', () => {
    cy.visit('/thisPageDoesNotExist');
    cy.get('[data-cy="not-found"]').should('be.visible');
  });
});
