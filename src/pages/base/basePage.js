const { expect } = require('@playwright/test');
const Logger = require('../../utils/logger');

class BasePage {
  constructor(page) {
    this.page = page;
    this.logger = new Logger();
  }

  async navigateTo(url) {
    this.logger.info(`Navigating to: ${url}`);
    await this.page.goto(url);
    await this.waitForPageLoad();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async clickElement(selector, options = {}) {
    this.logger.info(`Clicking element: ${selector}`);
    await this.page.click(selector, options);
  }

  async fillInput(selector, value, options = {}) {
    this.logger.info(`Filling input ${selector} with value: ${value}`);
    await this.page.fill(selector, value, options);
  }

  async getText(selector) {
    await this.page.waitForSelector(selector);
    const text = await this.page.textContent(selector);
    this.logger.info(`Retrieved text from ${selector}: ${text}`);
    return text;
  }

  async takeScreenshot(name) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = `screenshots/${name}-${timestamp}.png`;
    await this.page.screenshot({ path: screenshotPath });
    this.logger.info(`Screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  }

  async waitForElement(selector, options = {}) {
    this.logger.info(`Waiting for element: ${selector}`);
    return await this.page.waitForSelector(selector, options);
  }

  async expectElementToBeVisible(selector, timeout = 30000) {
    await expect(this.page.locator(selector)).toBeVisible({ timeout });
  }

  async expectElementToHaveText(selector, expectedText) {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }
}

module.exports = BasePage;
