const base = require('./baseFixtures');
const users = require('../data/users.json');

const test = base.extend({
  // This fixture is not used in the example tests, but is here as an example
  // of how to extend fixtures.
  loggedInPage: async ({ loginPage }, use) => {
    await loginPage.navigate('https://www.saucedemo.com/');
    await loginPage.login(users.validUser.username, users.validUser.password);
    await use(loginPage.page);
  },
});

module.exports = test;
