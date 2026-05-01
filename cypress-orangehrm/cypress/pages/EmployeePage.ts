class EmployeePage {
  private addEmployeeButton  = 'button:contains("Add Employee")';
  private firstNameInput     = '[name="firstName"]';
  private lastNameInput      = '[name="lastName"]';
  private employeeIdInput    = '.--input-focused input';
  private saveButton         = '[type="submit"]';
  private searchInput        = '.oxd-input:not([type="hidden"])';
  private searchButton       = 'button[type="submit"]';
  private employeeTable      = '.oxd-table-body';
  private tableRows          = '.oxd-table-row--clickable';

  visit(): void {
    cy.visit('/web/index.php/pim/viewEmployeeList');
  }

  clickAddEmployee(): void {
    cy.get(this.addEmployeeButton).click();
  }

  fillFirstName(name: string): void {
    cy.get(this.firstNameInput).clear().type(name);
  }

  fillLastName(name: string): void {
    cy.get(this.lastNameInput).clear().type(name);
  }

  clickSave(): void {
    cy.get(this.saveButton).first().click();
  }

  searchEmployee(name: string): void {
    cy.get(this.searchInput).first().clear().type(name);
    cy.get(this.searchButton).click();
  }

  getTableRows(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.tableRows);
  }

  isEmployeeListVisible(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.employeeTable).should('be.visible');
  }
}

export default new EmployeePage();
