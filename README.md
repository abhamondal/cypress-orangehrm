# Cypress E2E Test Suite — OrangeHRM

End-to-end test automation for [OrangeHRM](https://opensource-demo.orangehrmlive.com), an open-source HR management system. Built with Cypress and TypeScript using the Page Object Model pattern.

![Cypress](https://img.shields.io/badge/Cypress-13.x-04C38E?logo=cypress&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![CI](https://github.com/abhamondal/cypress-orangehrm/actions/workflows/cypress.yml/badge.svg)

---

## What is tested

| Module | Scenarios covered |
|---|---|
| Authentication | Valid login, invalid credentials, empty field validation, UI checks |
| Dashboard | Page load, sidebar navigation, widgets, logout |
| Employee Management | Employee list, search, add employee form, field validation |
| Leave Management | Leave list, apply leave form, validation on empty submit |

**Total: 25 test cases across 4 modules**

---

## Project structure

```
cypress-orangehrm/
├── .github/workflows/     CI pipeline (GitHub Actions)
├── cypress/
│   ├── e2e/               Test files organised by feature
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── employee/
│   │   └── leave/
│   ├── pages/             Page Object Model classes
│   ├── fixtures/          Test data (users.json)
│   └── support/           Custom commands and global config
├── cypress.config.ts
├── tsconfig.json
└── package.json
```

---

## Getting started

**Prerequisites:** Node.js 18 or higher

```bash
# Clone the repo
git clone https://github.com/abhamondal/cypress-orangehrm.git
cd cypress-orangehrm

# Install dependencies
npm install

# Open Cypress test runner (interactive)
npm run cy:open

# Run all tests headlessly
npm run cy:run

# Run with HTML report
npm run cy:report
```

---

## Design patterns used

**Page Object Model** — each page has its own class with selectors and methods, keeping test files clean and easy to maintain.

**Custom commands** — `cy.login()` and `cy.loginWithFixture()` are registered globally so every test can log in with one line.

**Fixtures** — test data lives in `cypress/fixtures/users.json`, making it easy to swap credentials or test data without touching test logic.

---

## CI pipeline

Tests run automatically on every push and pull request via GitHub Actions. The workflow uses the official `cypress-io/github-action`, uploads an HTML report as an artifact after every run, and uploads screenshots only on failure.

---

## Author

**Abha Singh** — QA Test Lead  
[linkedin.com/in/abha10](https://linkedin.com/in/abha10) · [github.com/abhamondal](https://github.com/abhamondal)
