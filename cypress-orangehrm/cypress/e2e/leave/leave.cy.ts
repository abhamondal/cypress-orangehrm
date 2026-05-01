import LeavePage from '../../pages/LeavePage';

describe('Leave Management', () => {
  beforeEach(() => {
    cy.loginWithFixture();
  });

  context('Leave List', () => {
    beforeEach(() => {
      LeavePage.visitLeaveList();
    });

    it('should display the Leave List page header', () => {
      LeavePage.getPageHeader().should('contain', 'Leave List');
    });

    it('should display the leave records table', () => {
      LeavePage.isLeaveTableVisible();
    });
  });

  context('Apply Leave', () => {
    beforeEach(() => {
      LeavePage.visitApplyLeave();
    });

    it('should display the Apply Leave page header', () => {
      LeavePage.getPageHeader().should('contain', 'Apply Leave');
    });

    it('should display the leave type dropdown', () => {
      LeavePage.getLeaveTypeDropdown();
    });

    it('should show a validation error when submitting without selecting leave type', () => {
      cy.get('[type="submit"]').click();
      cy.contains('Required').should('be.visible');
    });
  });
});
