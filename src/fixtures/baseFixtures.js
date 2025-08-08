const { test: base, expect } = require('@playwright/test');const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/homePage');
const Logger = require('../utils/logger');

// Extend base test with custom fixtures
const test = base.extend({
  logger: async ({}, use) => {
    const logger = new Logger();
    await use(logger);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  authenticatedUser: async ({ page, loginPage }, use) => {
    // Auto-login for tests that require authentication
    await page.goto('/login');
    await loginPage.login(
      process.env.TEST_USER_EMAIL || 'test@example.com',
      process.env.TEST_USER_PASSWORD || 'testpassword'
    );
    await use(page);
  },
});

module.exports = { test, expect };
