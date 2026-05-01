import './commands';
import 'cypress-mochawesome-reporter/register';

// Ignore common third-party errors from the demo site
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('ResizeObserver') || err.message.includes('hydrat')) {
    return false;
  }
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
