const BasePage = require('./base/basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.welcomeMessage = '.title';
  }

  async getWelcomeMessage() {
    return await this.page.textContent(this.welcomeMessage);
  }
}

module.exports = HomePage;
