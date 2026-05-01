import DashboardPage from '../../pages/DashboardPage';

describe('Dashboard', () => {
  beforeEach(() => {
    cy.loginWithFixture();
  });

  it('should display the Dashboard title', () => {
    DashboardPage.getPageTitle().should('contain', 'Dashboard');
  });

  it('should show the sidebar navigation panel', () => {
    DashboardPage.isSidebarVisible();
  });

  it('should show the user dropdown menu', () => {
    DashboardPage.isUserDropdownVisible();
  });

  it('should display dashboard widgets', () => {
    DashboardPage.getWidgetNames().should('have.length.greaterThan', 0);
  });

  it('should navigate to PIM from the sidebar', () => {
    DashboardPage.navigateTo('PIM');
    cy.url().should('include', '/pim');
  });

  it('should navigate to Leave from the sidebar', () => {
    DashboardPage.navigateTo('Leave');
    cy.url().should('include', '/leave');
  });

  it('should log out successfully', () => {
    DashboardPage.logout();
    cy.url().should('include', '/auth/login');
  });
});
