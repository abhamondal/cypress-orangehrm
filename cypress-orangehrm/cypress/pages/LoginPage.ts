class LoginPage {
  private usernameInput = '[name="username"]';
  private passwordInput = '[name="password"]';
  private loginButton   = '[type="submit"]';
  private errorAlert    = '.oxd-alert-content-text';
  private logoImage     = '.orangehrm-login-branding img';

  visit(): void {
    cy.visit('/web/index.php/auth/login');
  }

  typeUsername(username: string): void {
    cy.get(this.usernameInput).clear().type(username);
  }

  typePassword(password: string): void {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin(): void {
    cy.get(this.loginButton).click();
  }

  login(username: string, password: string): void {
    this.visit();
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }

  getErrorMessage(): Cypress.Chainable<string> {
    return cy.get(this.errorAlert).invoke('text');
  }

  isLogoVisible(): Cypress.Chainable<boolean> {
    return cy.get(this.logoImage).then(($el) => $el.is(':visible'));
  }
}

export default new LoginPage();
