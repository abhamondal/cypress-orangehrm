class DashboardPage {
  private dashboardHeader    = 'h6.oxd-text--h6';
  private userDropdown       = '.oxd-userdropdown-tab';
  private sidebarMenu        = '.oxd-sidepanel-body';
  private timeAtWorkWidget   = '.orangehrm-dashboard-widget-name';
  private quickLaunchWidget  = '.oxd-grid-item';

  getPageTitle(): Cypress.Chainable<string> {
    return cy.get(this.dashboardHeader).first().invoke('text');
  }

  isSidebarVisible(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.sidebarMenu).should('be.visible');
  }

  isUserDropdownVisible(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.userDropdown).should('be.visible');
  }

  getWidgetNames(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.timeAtWorkWidget);
  }

  navigateTo(menuItem: string): void {
    cy.get(this.sidebarMenu).contains(menuItem).click();
  }

  logout(): void {
    cy.get(this.userDropdown).click();
    cy.contains('Logout').click();
  }
}

export default new DashboardPage();
