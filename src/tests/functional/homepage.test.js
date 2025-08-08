const { test, expect } = require('../../fixtures/baseFixtures');
const HomePage = require('../../pages/homePage');
const LoginPage = require('../../pages/loginPage');
const users = require('../../data/users.json');

test.describe('Homepage Tests', () => {
  let homePage;
  let loginPage;

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateTo('/');
    await loginPage.login(users.validUser.username, users.validUser.password);
  });

  test('should display welcome message', async ({ homePage }) => {
    expect(await homePage.getWelcomeMessage()).toBe('Products');
  });
});
