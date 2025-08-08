const BasePage = require('./base/basePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Page elements
    this.selectors = {
      emailInput: '[data-test="username"]',
      passwordInput: '[data-test="password"]',
      loginButton: '[data-test="login-button"]',
      errorMessage: '[data-test="error"]',
      // These selectors are not on saucedemo.com, but are kept for example purposes
      forgotPasswordLink: '[data-testid="forgot-password-link"]',
      signupLink: '[data-testid="signup-link"]'
    };
  }

  async login(username, password) {
    this.logger.info(`Attempting login with username: ${username}`);
    
    await this.fillInput(this.selectors.emailInput, username);
    await this.fillInput(this.selectors.passwordInput, password);
    await this.clickElement(this.selectors.loginButton);
    
    // Wait for navigation or error
    await Promise.race([
      this.page.waitForURL('**/inventory.html'),
      this.waitForElement(this.selectors.errorMessage)
    ]);
  }

  async getErrorMessage() {
    return await this.getText(this.selectors.errorMessage);
  }

  async clickForgotPassword() {
    await this.clickElement(this.selectors.forgotPasswordLink);
  }

  async isLoginFormVisible() {
    try {
      await this.expectElementToBeVisible(this.selectors.emailInput);
      await this.expectElementToBeVisible(this.selectors.passwordInput);
      await this.expectElementToBeVisible(this.selectors.loginButton);
      return true;
    } catch (error) {
      this.logger.error('Login form is not fully visible', error);
      return false;
    }
  }
}

module.exports = LoginPage;
