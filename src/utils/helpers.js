const Logger = require('./logger');

class TestHelpers {
  constructor() {
    this.logger = new Logger();
  }

  async retryAction(action, maxRetries = 3, delay = 1000) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        this.logger.info(`Attempt ${attempt} of ${maxRetries}`);
        const result = await action();
        this.logger.info(`Action succeeded on attempt ${attempt}`);
        return result;
      } catch (error) {
        lastError = error;
        this.logger.warn(`Attempt ${attempt} failed: ${error.message}`);
        
        if (attempt < maxRetries) {
          this.logger.info(`Waiting ${delay}ms before retry...`);
          await this.delay(delay);
        }
      }
    }
    
    this.logger.error(`All ${maxRetries} attempts failed`);
    throw lastError;
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async safeExecute(action, fallbackValue = null) {
    try {
      return await action();
    } catch (error) {
      this.logger.error('Safe execute failed:', error);
      return fallbackValue;
    }
  }

  generateTestId() {
    return `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async handleFlakiness(page, action, maxRetries = 2) {
    return await this.retryAction(async () => {
      try {
        await action();
      } catch (error) {
        // Take screenshot for debugging
        await page.screenshot({ 
          path: `screenshots/flaky-test-${Date.now()}.png` 
        });
        throw error;
      }
    }, maxRetries);
  }
}

module.exports = TestHelpers;
