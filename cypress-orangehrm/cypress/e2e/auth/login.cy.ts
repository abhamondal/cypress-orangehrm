import LoginPage from '../../pages/LoginPage';
import DashboardPage from '../../pages/DashboardPage';

describe('Authentication', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  context('Valid login', () => {
    it('should log in successfully with valid credentials', () => {
      cy.fixture('users').then((users) => {
        LoginPage.typeUsername(users.validUser.username);
        LoginPage.typePassword(users.validUser.password);
        LoginPage.clickLogin();
        cy.url().should('include', '/dashboard');
      });
    });

    it('should display the dashboard header after login', () => {
      cy.fixture('users').then((users) => {
        LoginPage.login(users.validUser.username, users.validUser.password);
        DashboardPage.getPageTitle().should('contain', 'Dashboard');
      });
    });

    it('should show the sidebar navigation after login', () => {
      cy.fixture('users').then((users) => {
        LoginPage.login(users.validUser.username, users.validUser.password);
        DashboardPage.isSidebarVisible();
      });
    });
  });

  context('Invalid login', () => {
    it('should show an error message with wrong credentials', () => {
      cy.fixture('users').then((users) => {
        LoginPage.typeUsername(users.invalidUser.username);
        LoginPage.typePassword(users.invalidUser.password);
        LoginPage.clickLogin();
        LoginPage.getErrorMessage().should('contain', 'Invalid credentials');
      });
    });

    it('should show a required field error when username is empty', () => {
      LoginPage.typePassword('somepassword');
      LoginPage.clickLogin();
      cy.contains('Required').should('be.visible');
    });

    it('should show a required field error when password is empty', () => {
      LoginPage.typeUsername('Admin');
      LoginPage.clickLogin();
      cy.contains('Required').should('be.visible');
    });

    it('should stay on login page after failed login', () => {
      cy.fixture('users').then((users) => {
        LoginPage.login(users.invalidUser.username, users.invalidUser.password);
        cy.url().should('include', '/auth/login');
      });
    });
  });

  context('Login page UI', () => {
    it('should display the OrangeHRM logo', () => {
      LoginPage.isLogoVisible();
    });

    it('should have username and password fields visible', () => {
      cy.get('[name="username"]').should('be.visible');
      cy.get('[name="password"]').should('be.visible');
    });
  });
});
