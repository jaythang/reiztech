# Playwright Gherkin Login Automation

## Overview
This project automates the login functionality of the OrangeHRM demo application using Playwright and Cucumber.js with Gherkin syntax.

## Features
- **Valid Login Test**: Ensures that a user can log in with correct credentials.
- **Invalid Login Test**: Tests incorrect credentials and captures a screenshot of the error message.

## Project Structure
```
/playwright-project
│── features/
│   ├── login.feature  # Gherkin scenarios
│── tests/
│   ├── login.spec.js  # Step definitions
│── playwright.config.js
│── package.json
│── cucumber.js
│── README.md
```

## Setup & Installation
1. Install **Node.js** (if not already installed).
2. Clone the repository:
   ```sh
   git clone <repository-url>
   cd playwright-project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running the Tests

- **Run specific feature:**
  ```sh
  npx cucumber-js --require tests/
  ```

## Expected Outcomes
- If login is **successful**, the test navigates to the dashboard.
- If login **fails**, an error message is verified and a screenshot (`error_screenshot.png`) is saved.

## Additional Notes
- The test runs in **non-headless** mode by default.
- Modify `playwright.config.js` to run tests headlessly if required.

## Contributions
Feel free to submit issues or pull requests to improve the script.

## License
This project is open-source under the MIT License.
