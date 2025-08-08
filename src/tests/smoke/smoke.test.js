const { test, expect } = require('@playwright/test');

test.describe('Smoke Tests', () => {
  test('should load the page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
  });
});
