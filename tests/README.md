# QA Portfolio - SauceDemo Testing Project

##  Project Overview
This repository showcases my Manual Testing and Automation Testing skills using the SauceDemo web application.

The project includes:
- Manual Test Planning
- Test Case Design
- Requirements Traceability Matrix (RTM)
- Bug Reporting
- Test Summary Report
- Playwright Automation Tests built with the Page Object Model (POM)

This portfolio demonstrates my understanding of the Software Testing Life Cycle (STLC), defect reporting, and test automation.

##  Tools & Technologies
- Playwright
- TypeScript
- Page Object Model (POM)
- Visual Studio Code
- Git & GitHub
- Postman
- Microsoft Excel
- Microsoft Word
- Google Chrome

## 📂 Project Structure

QA_Portfolio/

│

├── manual-testing/

│ ├── Test Plan.xlsx

│ ├── Test Cases.xlsx

│ ├── RTM.xlsx

│ ├── Bug Report.xlsx

│ └── Test Summary Report.docx


│
├── src/

│ └── pages/

│ ├── LoginPage.ts

│ ├── CartPage.ts

│ └── CheckoutPage.ts

│
├── tests/
│ ├── cart.spec.ts
│ └── checkout.spec.ts

│
├── postman/

│ └── collections/


│
├── package.json

├── package-lock.json

├── playwright.config.ts

└── README.md





##  Manual Testing Deliverables
- Test Plan
- Test Cases
- Requirements Traceability Matrix (RTM)
- Bug Report
- Test Summary Report

##  Automation Test Scenarios

**Login**
- Valid Login (via `LoginPage`, used as a setup step in Cart and Checkout tests)

**Cart**
- Add Product to Cart
- Verify Cart Badge Count

**Checkout**
- Fill Checkout Details
- Complete Checkout
- Verify Order Confirmation Message

##  Framework Architecture
Tests are built using the **Page Object Model (POM)**, separating page interactions (`src/pages/`) from test logic (`tests/`). Each page class encapsulates its own locators and actions, making tests easier to read, maintain, and extend.

## ▶️ How to Run Automation Tests

**Install Dependencies**
```bash
npm install
```

**Run All Tests**
```bash
npx playwright test
```

**Run a Specific Test**
```bash
npx playwright test tests/checkout.spec.ts
```

**View HTML Report**
```bash
npx playwright show-report
```

##  Skills Demonstrated
- Manual Testing
- Test Case Design
- Bug Reporting
- Requirement Traceability Matrix
- Playwright Automation with Page Object Model
- TypeScript
- Git & GitHub
- Test Documentation

## 🎯 Project Objective
The objective of this project is to demonstrate practical QA skills by performing manual and automation testing on the SauceDemo application while following industry-standard testing practices.

## 👨‍💻 Author
Manikandan
GitHub: https://github.com/Manikanda-N

## ⭐ Future Improvements
- Data-Driven Testing
- Expanded API Testing coverage using Postman
- SQL Testing
- CI/CD using GitHub Actions
- Cross-Browser Testing
- Jenkins Integration
