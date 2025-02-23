const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');
const fs = require('fs');

setDefaultTimeout(60000);

let browser, page;

Given('I open the OrangeHRM login page', async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I enter the username {string}', async (username) => {
    await page.fill('input[name="username"]', username);
});

When('I enter the password {string}', async (password) => {
    await page.fill('input[name="password"]', password);
});

When('I click the login button', async () => {
    await page.click('button[type="submit"]');
});

Then('I should be redirected to the dashboard', async () => {
    await page.waitForSelector('.oxd-topbar-header-breadcrumb');
    const url = page.url();
    assert.ok(url.includes('/dashboard'), 'User not redirected to dashboard');
    await browser.close();
});

Then('I should see an error message', async () => {
    await page.waitForSelector('.oxd-alert-content-text');
    const errorMessage = await page.textContent('.oxd-alert-content-text');
    assert.ok(errorMessage.includes('Invalid credentials'), 'Error message not displayed');
});

Then('I capture a screenshot', async () => {
    await page.screenshot({ path: 'error_screenshot.png' });
    await browser.close();
});

// cucumber.js config
module.exports = {
  default: {
    require: ['./tests/*.spec.js'],
    format: ['pretty'],
  },
};
