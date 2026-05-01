import EmployeePage from '../../pages/EmployeePage';

describe('Employee Management', () => {
  beforeEach(() => {
    cy.loginWithFixture();
    EmployeePage.visit();
  });

  it('should display the employee list page', () => {
    EmployeePage.isEmployeeListVisible();
  });

  it('should show at least one employee in the list', () => {
    EmployeePage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('should search for an existing employee by name', () => {
    EmployeePage.searchEmployee('Admin');
    EmployeePage.getTableRows().should('have.length.greaterThan', 0);
  });

  it('should show no results for a non-existent employee', () => {
    EmployeePage.searchEmployee('XYZNOTEXIST99999');
    cy.contains('No Records Found').should('be.visible');
  });

  it('should navigate to Add Employee page when clicking Add Employee', () => {
    EmployeePage.clickAddEmployee();
    cy.url().should('include', '/pim/addEmployee');
  });

  it('should display the Add Employee form with required fields', () => {
    EmployeePage.clickAddEmployee();
    cy.get('[name="firstName"]').should('be.visible');
    cy.get('[name="lastName"]').should('be.visible');
  });

  it('should show a validation error when saving without a first name', () => {
    EmployeePage.clickAddEmployee();
    EmployeePage.fillLastName('TestUser');
    EmployeePage.clickSave();
    cy.contains('Required').should('be.visible');
  });
});
