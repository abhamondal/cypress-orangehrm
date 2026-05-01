/// <reference types="cypress" />

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/web/index.php/auth/login');
  cy.get('[name="username"]').clear().type(username);
  cy.get('[name="password"]').clear().type(password);
  cy.get('[type="submit"]').click();
  cy.url().should('include', '/dashboard');
});

Cypress.Commands.add('loginWithFixture', () => {
  cy.fixture('users').then((users) => {
    cy.login(users.validUser.username, users.validUser.password);
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
      loginWithFixture(): Chainable<void>;
    }
  }
}
