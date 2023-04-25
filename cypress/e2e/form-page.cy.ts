describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/Form');
  });

  it('Should show error message when submit clicked but form not filled', () => {
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="required"]').should('be.visible');
  });

  it('Should show error message when submit clicked but name starts with lowercase', () => {
    cy.get('[data-cy="name"]').type('wrong');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="required"]')
      .eq(0)
      .should('have.text', 'Name should start from uppercase letter');
  });

  it('Should fill and submit form. Then show card with info from form', () => {
    cy.get('[data-cy="name"]').type('Dilshoda');
    cy.get('[data-cy="date"]').type('2030-07-20');
    cy.get('[data-cy="country"]').select('Uzbekistan');
    cy.get('[data-cy="checkbox"]').eq(2).check();
    cy.get('[data-cy="radio"]').eq(0).check();
    cy.get('[data-cy="image"]').selectFile('cypress/fixtures/Moon.jpg');
    cy.get('[data-cy="submit"]').click();

    cy.get('[data-cy="submit-message"]').should('be.visible');
    cy.get('[data-cy="form-card"]').should('be.visible');
  });
});
