// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,  // Set to true if you don't want to see the browser UI
    browserName: 'chromium', // Can be 'chromium', 'firefox', or 'webkit'
    viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
     use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    headless: true,
    screenshot: 'only-on-failure',
         video: 'retain-on-failure',
    default: {
    require: ['./tests/*.spec.js'],
        format: ['pretty'],
    require: ['./tests/*.spec.js'],  // Ensure this path matches your test files
    format: ['pretty'],
    paths: ['./features/*.feature'],
  },
  },
    },
    
});
