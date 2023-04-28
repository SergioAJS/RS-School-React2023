/// <reference types="cypress" />

describe('Navigating through pages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should go to Form page', () => {
    cy.get('[data-cy="form-link"]').click();
    cy.location('pathname').should('equal', '/Form');
  });

  it('Should go to About Us page and return to Home page on button click', () => {
    cy.get('[data-cy="aboutUs-link"]').click();
    cy.location('pathname').should('equal', '/AboutUs');

    cy.get('[data-cy="to-home"]').click();
    cy.location('pathname').should('equal', '/');
  });
});
