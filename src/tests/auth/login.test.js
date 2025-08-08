const { test, expect } = require('../../fixtures/baseFixtures');
const users = require('../../data/users.json');

test.describe('Login Functionality', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo('/');
  });

  test('should login with valid credentials @smoke', async ({ loginPage, page }) => {
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('should show error for invalid credentials', async ({ loginPage }) => {
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
  });

});
