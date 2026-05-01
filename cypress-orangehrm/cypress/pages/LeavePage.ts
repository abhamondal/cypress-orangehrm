class LeavePage {
  private leaveListMenu   = 'a:contains("Leave List")';
  private applyLeaveMenu  = 'a:contains("Apply")';
  private leaveTypeSelect = '.oxd-select-text';
  private fromDateInput   = 'input[placeholder="yyyy-dd-mm"]';
  private commentInput    = 'textarea';
  private applyButton     = 'button[type="submit"]';
  private leaveTable      = '.oxd-table-body';
  private pageHeader      = 'h6.oxd-text--h6';

  visitLeaveList(): void {
    cy.visit('/web/index.php/leave/viewLeaveList');
  }

  visitApplyLeave(): void {
    cy.visit('/web/index.php/leave/applyLeave');
  }

  getPageHeader(): Cypress.Chainable<string> {
    return cy.get(this.pageHeader).first().invoke('text');
  }

  isLeaveTableVisible(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.leaveTable).should('be.visible');
  }

  selectLeaveType(leaveType: string): void {
    cy.get(this.leaveTypeSelect).first().click();
    cy.contains('.oxd-select-option', leaveType).click();
  }

  getLeaveTypeDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.leaveTypeSelect).should('be.visible');
  }
}

export default new LeavePage();
