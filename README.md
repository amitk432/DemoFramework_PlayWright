# ðŸŽ­ Playwright Automation Framework

[![Tests](https://github.com/amit-org/DemoFramework_PlayWright/workflows/Playwright%20Tests/badge.svg)](https://github.com/amit-org/DemoFramework_PlayWright/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![Playwright](https.img.shields.io/badge/Playwright-1.40%2B-blue)](https://playwright.dev/)

A **production-ready, enterprise-grade** UI automation testing framework built with **Playwright** and **JavaScript**. This framework provides a robust foundation for scalable, maintainable, and efficient web application testing with advanced features like parallel execution, comprehensive reporting, and CI/CD integration.

---

## ðŸš€ **Key Features**

- âœ… **Page Object Model (POM)** - Clean separation of concerns with reusable page components
- âœ… **Custom Test Fixtures** - Pre-configured test utilities and authenticated sessions  
- âœ… **Multi-Browser Support** - Chrome, Firefox, Safari, and mobile browser testing
- âœ… **Parallel Execution** - Lightning-fast test execution with built-in parallelization
- âœ… **Rich Reporting** - HTML, Allure, and JSON reports with screenshots and videos
- âœ… **CI/CD Integration** - Ready-to-use GitHub Actions and Jenkins configurations
- âœ… **Environment Management** - Seamless configuration switching across environments
- âœ… **Error Handling & Logging** - Comprehensive error tracking and retry mechanisms
- âœ… **Cross-Platform** - Works on Windows, macOS, and Linux
- âœ… **TypeScript Ready** - Optional TypeScript support with full type definitions

---

## ðŸ“‹ **Table of Contents**

- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Writing Tests](#-writing-tests)
- [Running Tests](#-running-tests)
- [Reporting](#-reporting)
- [CI/CD Integration](#-cicd-integration)
- [Best Practices](#-best-practices)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Support](#-support)

---

## âš¡ **Quick Start**

Get up and running in **5 minutes**:

```bash
# 1. Clone and setup
git clone https://github.com/amit-org/DemoFramework_PlayWright.git
cd DemoFramework_PlayWright

# 2. Install dependencies
npm install

# 3. Install browsers
npx playwright install

# 4. Run sample tests
npm test

# 5. View results
npm run report
```

**That's it!** ðŸŽ‰ Your framework is ready for testing.

---

## ðŸ“  **Project Structure**

```
DemoFramework_PlayWright/
â”œâ”€â”€ ðŸ“‚ src/                          # Source code
â”‚   â”œâ”€â”€ ðŸ“‚ pages/                    # Page Object Model
â”‚   â”‚   â”œâ”€â”€ ðŸ“‚ base/
â”‚   â”‚   â”‚   â””â”€â”€ ðŸ“„ basePage.js       # Base page with common methods
â”‚   â”‚   â”œâ”€â”€ ðŸ“„ loginPage.js          # Login page implementation
â”‚   â”‚   â””â”€â”€ ðŸ“„ homePage.js           # Home page implementation
â”‚   â”œâ”€â”€ ðŸ“‚ tests/                    # Test suites organized by feature
â”‚   â”‚   â”œâ”€â”€ ðŸ“‚ auth/                 # Authentication tests
â”‚   â”‚   â”œâ”€â”€ ðŸ“‚ functional/           # Functional tests
â”‚   â”‚   â””â”€â”€ ðŸ“‚ smoke/                # Smoke tests
â”‚   â”œâ”€â”€ ðŸ“‚ utils/                    # Utility functions
â”‚   â”‚   â”œâ”€â”€ ðŸ“„ helpers.js            # Test helpers and retry logic
â”‚   â”‚   â”œâ”€â”€ ðŸ“„ logger.js             # Winston logger configuration
â”‚   â”‚   â””â”€â”€ ðŸ“„ dataGenerator.js      # Dynamic test data generation
â”‚   â”œâ”€â”€ ðŸ“‚ fixtures/                 # Custom Playwright fixtures
â”‚   â”‚   â””â”€â”€ ðŸ“„ baseFixtures.js       # Reusable test fixtures
â”‚   â””â”€â”€ ðŸ“‚ data/                     # Static test data
â”‚       â”œâ”€â”€ ðŸ“„ testData.json         # Test data sets
â”‚       â””â”€â”€ ðŸ“„ users.json            # User credentials
â”œâ”€â”€ ðŸ“‚ config/                       # Configuration management
â”‚   â”œâ”€â”€ ðŸ“‚ environments/             # Environment-specific configs
â”‚   â”‚   â”œâ”€â”€ ðŸ“„ dev.config.js         # Development settings
â”‚   â”‚   â”œâ”€â”€ ðŸ“„ staging.config.js     # Staging settings
â”‚   â”‚   â””â”€â”€ ðŸ“„ prod.config.js        # Production settings
â”‚   â””â”€â”€ ðŸ“„ playwright.config.js      # Main Playwright configuration
â”œâ”€â”€ ðŸ“‚ reports/                      # Generated test reports
â”œâ”€â”€ ðŸ“‚ screenshots/                  # Failure screenshots
â”œâ”€â”€ ðŸ“‚ videos/                       # Test execution recordings
â”œâ”€â”€ ðŸ“‚ logs/                         # Application and test logs
â”œâ”€â”€ ðŸ“‚ .github/workflows/            # GitHub Actions CI/CD
â”œâ”€â”€ ðŸ“„ Jenkinsfile                   # Jenkins pipeline
â”œâ”€â”€ ðŸ“„ package.json                  # Dependencies and scripts
â”œâ”€â”€ ðŸ“„ .env                          # Environment variables
â””â”€â”€ ðŸ“„ README.md                     # This documentation
```

---

## ðŸ —ï¸  **Installation**

### **Prerequisites**

Ensure you have these installed:

- **Node.js** 18.0+ ([Download](https://nodejs.org/))
- **npm** 9.0+ (included with Node.js)
- **Git** ([Download](https://git-scm.com/))

### **Step-by-Step Installation**

#### **1. Clone Repository**
```bash
git clone https://github.com/amit-org/DemoFramework_PlayWright.git
cd DemoFramework_PlayWright
```

#### **2. Install Node Dependencies**
```bash
npm install
```

#### **3. Install Playwright Browsers**
```bash
# Install all browsers (Chrome, Firefox, Safari)
npx playwright install

# Or install specific browsers
npx playwright install chromium firefox webkit

# Install system dependencies (Linux/Ubuntu)
npx playwright install-deps
```

#### **4. Environment Setup**
```bash
# Create environment file
cp .env.example .env

# Create required directories
mkdir -p logs screenshots videos
```

#### **5. Verify Installation**
```bash
# Run verification test
npm test -- --grep "should load a webpage"

# Check installation
npx playwright --version
```

### **Docker Installation (Optional)**

```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "test"]
```

```bash
# Build and run with Docker
docker build -t playwright-framework .
docker run playwright-framework
```

---

## âš™ï¸  **Configuration**

### **Environment Variables**

Create a `.env` file in your project root:

```bash
# Environment Configuration
NODE_ENV=dev
BASE_URL=http://localhost:3000
API_BASE_URL=http://localhost:3001

# Test Credentials
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=securepassword123
ADMIN_USER_EMAIL=admin@example.com
ADMIN_USER_PASSWORD=adminpassword123

# Logging
LOG_LEVEL=info
ENABLE_CONSOLE_LOGS=true

# CI/CD Settings
CI=false
HEADLESS=true
PARALLEL_WORKERS=4

# Reporting
ENABLE_VIDEO_RECORDING=true
ENABLE_SCREENSHOTS=true
ALLURE_RESULTS_DIR=allure-results

# External Integrations
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
JIRA_API_TOKEN=YOUR_JIRA_API_TOKEN
```

### **Environment-Specific Configurations**

#### **Development Environment**
**config/environments/dev.config.js:**
```javascript
module.exports = {
  baseURL: 'http://localhost:3000',
  timeout: 30000,
  headless: false,
  slowMo: 100,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  ignoreHTTPSErrors: true,
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9'
  }
};
```

#### **Staging Environment**
**config/environments/staging.config.js:**
```javascript
module.exports = {
  baseURL: 'https://www.google.com',
  timeout: 45000,
  headless: true,
  slowMo: 0,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  ignoreHTTPSErrors: false,
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
    'Authorization': `Bearer ${process.env.STAGING_API_TOKEN}`
  }
};
```

#### **Production Environment**
**config/environments/prod.config.js:**
```javascript
module.exports = {
  baseURL: 'https://www.google.com',
  timeout: 60000,
  headless: true,
  slowMo: 0,
  screenshot: 'only-on-failure',
  video: 'off',
  ignoreHTTPSErrors: false,
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
    'Authorization': `Bearer ${process.env.PROD_API_TOKEN}`
  }
};
```

### **Browser Configuration**

**config/playwright.config.js:**
```javascript
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Test directory
  testDir: './src/tests',
  
  // Parallel execution
  fullyParallel: true,
  workers: process.env.CI ? 1 : 4,
  
  // Retries
  retries: process.env.CI ? 2 : 1,
  
  // Timeouts
  timeout: 60000,
  expect: { timeout: 30000 },
  
  // Reporters
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'reports/test-results.json' }],
    ['allure-playwright']
  ],
  
  // Global settings
  use: {
    actionTimeout: 30000,
    navigationTimeout: 60000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  
  // Browser projects
  projects: [
    // Desktop browsers
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    
    // Mobile browsers
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
    
    // Tablet
    { name: 'iPad', use: { ...devices['iPad Pro'] } }
  ]
});
```

---

## âœ ï¸  **Writing Tests**

### **Basic Test Structure**

```javascript
const { test, expect } = require('../fixtures/baseFixtures');

test.describe('User Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should login with valid credentials @smoke', async ({ loginPage, testData, logger }) => {
    const user = testData.users.valid;
    
    await test.step('Enter credentials', async () => {
      await loginPage.login(user.email, user.password);
    });
    
    await test.step('Verify successful login', async () => {
      await expect(loginPage.page).toHaveURL(/.*dashboard/);
      logger.info('User successfully logged in');
    });
  });
});
```

### **Page Object Pattern**

#### **Base Page Class**
```javascript
// src/pages/base/basePage.js
const { expect } = require('@playwright/test');
const Logger = require('../../utils/logger');

class BasePage {
  constructor(page) {
    this.page = page;
    this.logger = new Logger();
  }

  async navigateTo(url) {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async clickElement(selector) {
    await this.page.locator(selector).click();
  }

  async fillInput(selector, value) {
    await this.page.locator(selector).fill(value);
  }

  async getText(selector) {
    return await this.page.locator(selector).textContent();
  }

  async isElementVisible(selector, timeout = 5000) {
    try {
      await this.page.locator(selector).waitFor({ state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = BasePage;
```

#### **Specific Page Implementation**
```javascript
// src/pages/loginPage.js
const BasePage = require('./base/basePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    
    this.selectors = {
      emailInput: '[data-testid="email-input"]',
      passwordInput: '[data-testid="password-input"]',
      loginButton: '[data-testid="login-button"]',
      errorMessage: '[data-testid="error-message"]'
    };
  }

  async login(email, password) {
    await this.fillInput(this.selectors.emailInput, email);
    await this.fillInput(this.selectors.passwordInput, password);
    await this.clickElement(this.selectors.loginButton);
  }

  async getErrorMessage() {
    return await this.getText(this.selectors.errorMessage);
  }

  async isLoginFormVisible() {
    const emailVisible = await this.isElementVisible(this.selectors.emailInput);
    const passwordVisible = await this.isElementVisible(this.selectors.passwordInput);
    const buttonVisible = await this.isElementVisible(this.selectors.loginButton);
    
    return emailVisible && passwordVisible && buttonVisible;
  }
}

module.exports = LoginPage;
```

### **Custom Fixtures**

```javascript
// src/fixtures/baseFixtures.js
const { test: base, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const Logger = require('../utils/logger');

const test = base.extend({
  // Automatic page objects
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // Logging utility
  logger: async ({}, use) => {
    await use(new Logger());
  },

  // Pre-authenticated session
  authenticatedUser: async ({ page, loginPage }, use) => {
    await page.goto('/login');
    await loginPage.login(
      process.env.TEST_USER_EMAIL,
      process.env.TEST_USER_PASSWORD
    );
    await expect(page).toHaveURL(/.*dashboard/);
    await use(page);
  },

  // Test data
  testData: async ({}, use) => {
    const data = require('../data/testData.json');
    await use(data);
  }
});

module.exports = { test, expect };
```

### **Advanced Test Examples**

#### **API + UI Testing**
```javascript
test('should sync data between API and UI', async ({ page, request, logger }) => {
  // API call
  const apiResponse = await request.post('/api/users', {
    data: { name: 'Test User', email: 'test@example.com' }
  });
  const userId = (await apiResponse.json()).id;
  
  // UI verification
  await page.goto(`/users/${userId}`);
  await expect(page.locator('[data-testid="user-name"]')).toHaveText('Test User');
});
```

#### **Visual Testing**
```javascript
test('should match visual design', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page).toHaveScreenshot('dashboard.png');
});
```

#### **Mobile Testing**
```javascript
test.describe('Mobile Tests', () => {
  test.use({ ...devices['iPhone 12'] });
  
  test('should work on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
  });
});
```

---

## ðŸ ƒâ€ â™‚ï¸  **Running Tests**

### **Basic Execution**

```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests with interactive UI
npm run test:ui

# Run tests in debug mode
npm run test:debug
```

### **Selective Test Execution**

```bash
# Run specific test file
npx playwright test src/tests/auth/login.test.js

# Run tests matching pattern
npx playwright test --grep "login"

# Run tests with specific tags
npm run test:smoke

# Run tests in specific browser
npx playwright test --project=chromium

# Run failed tests only
npx playwright test --last-failed
```

### **Advanced Execution Options**

```bash
# Parallel execution with 4 workers
npm run test:parallel

# Run tests with specific timeout
npx playwright test --timeout=60000

# Run tests with specific environment
NODE_ENV=staging npm test

# Override base URL
BASE_URL=https://custom-url.com npm test

# Run tests with custom reporter
npx playwright test --reporter=json

# Update visual snapshots
npx playwright test --update-snapshots
```

### **Environment-Specific Execution**

```bash
# Development environment
NODE_ENV=dev npm test

# Staging environment  
NODE_ENV=staging npm test

# Production environment
NODE_ENV=prod npm test

# Custom environment variables
TEST_USER_EMAIL=custom@email.com npm test
```

---

## ðŸ“Š **Reporting**

### **Built-in Report Types**

#### **1. HTML Report (Default)**
```bash
# Generate and view HTML report
npm run report

# The report will be available at: playwright-report/index.html
```

#### **2. Allure Report (Advanced)**
```bash
# Generate Allure report
npx allure generate allure-results --clean

# Serve interactive Allure report
npx allure serve allure-results
```

#### **3. JSON Report (Programmatic)**
```javascript
// Reports available at: reports/test-results.json
const results = require('./reports/test-results.json');
console.log(`Total tests: ${results.stats.total}`);
console.log(`Passed: ${results.stats.expected}`);
console.log(`Failed: ${results.stats.unexpected}`);
```

### **Report Features**

- âœ… **Execution Summary** - Pass/fail statistics and timing
- âœ… **Test Steps** - Detailed step-by-step execution flow  
- âœ… **Screenshots** - Automatic capture on failures
- âœ… **Video Recordings** - Full test execution videos
- âœ… **Error Logs** - Detailed error messages and stack traces
- âœ… **Network Logs** - HTTP requests and responses
- âœ… **Performance Metrics** - Load times and resource usage
- âœ… **Browser Console** - JavaScript errors and warnings

### **Custom Reporting Integration**

#### **Slack Notifications**
```javascript
// src/utils/slackReporter.js
const { WebClient } = require('@slack/web-api');

class SlackReporter {
  async sendTestResults(results) {
    const slack = new WebClient(process.env.SLACK_TOKEN);
    
    await slack.chat.postMessage({
      channel: '#test-results',
      text: `Test run completed: ${results.passed}âœ… ${results.failed}â Œ`
    });
  }
}
```

#### **JIRA Integration**
```javascript
// Auto-create JIRA tickets for failed tests
test.afterEach(async ({}, testInfo) => {
  if (testInfo.status === 'failed') {
    await createJiraTicket({
      summary: `Test Failed: ${testInfo.title}`,
      description: testInfo.error.message
    });
  }
});
```

---

## ðŸ”„ **CI/CD Integration**

### **GitHub Actions**

**.github/workflows/playwright.yml:**
```yaml
name: Playwright Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      fail-fast: false
      matrix:
        shard: [1/4, 2/4, 3/4, 4/4]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Install Playwright browsers
      run: npx playwright install --with-deps
    
    - name: Run Playwright tests
      run: npx playwright test --shard=${{ matrix.shard }}
      env:
        NODE_ENV: staging
        TEST_USER_EMAIL: ${{ secrets.TEST_USER_EMAIL }}
        TEST_USER_PASSWORD: ${{ secrets.TEST_USER_PASSWORD }}
    
    - name: Upload test results
      uses: actions/upload-artifact@v4
      if: always()
      with:
        name: playwright-report-${{ matrix.shard }}
        path: |
          playwright-report/
          test-results/
        retention-days: 30
    
    - name: Upload Allure results
      uses: actions/upload-artifact@v4
      if: always()
      with:
        name: allure-results-${{ matrix.shard }}
        path: allure-results/
        retention-days: 30

  merge-reports:
    if: always()
    needs: [test]
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Download all artifacts
      uses: actions/download-artifact@v4
      with:
        path: all-reports
        pattern: playwright-report-*
    
    - name: Merge reports
      run: npx playwright merge-reports --reporter html all-reports
    
    - name: Upload merged report
      uses: actions/upload-artifact@v4
      with:
        name: final-playwright-report
        path: playwright-report/
```

### **Jenkins Pipeline**

**Jenkinsfile:**
```groovy
pipeline {
    agent any
    
    environment {
        NODE_ENV = 'staging'
        PLAYWRIGHT_BROWSERS_PATH = '/opt/pw-browsers'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Setup') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Lint & Type Check') {
            parallel {
                stage('ESLint') {
                    steps {
                        sh 'npm run lint'
                    }
                }
                stage('Type Check') {
                    steps {
                        sh 'npm run type-check'
                    }
                }
            }
        }
        
        stage('Test Execution') {
            parallel {
                stage('Chrome Tests') {
                    steps {
                        sh 'npx playwright test --project=chromium'
                    }
                }
                stage('Firefox Tests') {
                    steps {
                        sh 'npx playwright test --project=firefox'
                    }
                }
                stage('Mobile Tests') {
                    steps {
                        sh 'npx playwright test --project="Mobile Chrome"'
                    }
                }
            }
        }
        
        stage('Generate Reports') {
            steps {
                sh 'npx allure generate allure-results --clean'
            }
        }
    }
    
    post {
        always {
            // Publish HTML reports
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
            
            // Archive artifacts
            archiveArtifacts artifacts: '''
                screenshots/**/*.png,
                videos/**/*.webm,
                logs/**/*.log,
                allure-report/**
            ''', fingerprint: true
        }
        
        success {
            // Slack notification on success
            slackSend(
                channel: '#test-results',
                color: 'good',
                message: "âœ… Tests passed! Build #${BUILD_NUMBER}"
            )
        }
        
        failure {
            // Slack notification on failure
            slackSend(
                channel: '#test-results',
                color: 'danger',
                message: "â Œ Tests failed! Build #${BUILD_NUMBER}"
            )
            
            // Email notification
            emailext(
                subject: "Test Failure - Build #${BUILD_NUMBER}",
                body: "Tests failed. Check the build for details.",
                to: "${env.CHANGE_AUTHOR_EMAIL}"
            )
        }
    }
}
```

### **Docker Integration**

**Dockerfile:**
```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Create directories
RUN mkdir -p logs screenshots videos reports

# Set environment variables
ENV NODE_ENV=production
ENV HEADLESS=true

# Run tests
CMD ["npm", "test"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  playwright-tests:
    build: .
    environment:
      - NODE_ENV=staging
      - BASE_URL=https://staging.yourapp.com
      - TEST_USER_EMAIL=${TEST_USER_EMAIL}
      - TEST_USER_PASSWORD=${TEST_USER_PASSWORD}
    volumes:
      - ./reports:/app/reports
      - ./screenshots:/app/screenshots
      - ./videos:/app/videos
    command: npm test
```

---

## ðŸ“š **Best Practices**

### **Test Design Principles**

#### **1. Independent Tests**
```javascript
// âœ… Good - Tests don't depend on each other
test('should create user', async ({ page }) => {
  // Create unique user for this test
  const userId = `user_${Date.now()}`;
  await createUser(userId);
});

// â Œ Bad - Tests depend on previous test state  
test('should login user', async ({ page }) => {
  // Assumes user from previous test exists
});
```

#### **2. Descriptive Test Names**
```javascript
// âœ… Good - Clear what the test does
test('should display error message when login with invalid email format', async () => {});

// â Œ Bad - Unclear test purpose
test('login test', async () => {});
```

#### **3. Single Responsibility**
```javascript
// âœ… Good - Tests one specific behavior
test('should validate email field shows error for invalid format', async () => {});

// â Œ Bad - Tests multiple unrelated things
test('should validate all form fields and submit successfully', async () => {});
```

### **Selector Best Practices**

#### **Selector Priority Order**
```javascript
// 1. âœ… Data test attributes (most preferred)
'[data-testid="submit-button"]'
'[data-test="user-menu"]'

// 2. âœ… Semantic selectors
'button[type="submit"]'
'input[name="email"]'
'[role="button"]'

// 3. âœ… ARIA attributes
'[aria-label="Close dialog"]'
'[aria-expanded="true"]'

// 4. âš ï¸  Stable text content
'text=Submit'
'text="Sign In"'

// 5. â Œ Avoid fragile CSS selectors
'div.container > form > div:nth-child(2) > button'
'.btn-primary.large'
```

#### **Robust Selector Strategies**
```javascript
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    
    this.selectors = {
      // Multiple fallback selectors
      emailInput: '[data-testid="email-input"], input[name="email"], #email',
      
      // Role-based selectors
      submitButton: 'button[type="submit"], [role="button"][aria-label="Submit"]',
      
      // Text-based with exact match
      loginLink: 'text="Login"',
      
      // Combination selectors
      errorMessage: '.error-message, [data-testid="error"], .alert-danger'
    };
  }
}
```

### **Error Handling Strategies**

#### **Retry Mechanisms**
```javascript
// src/utils/helpers.js
class TestHelpers {
  async retryAction(action, maxRetries = 3, delay = 1000) {
    let lastError;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await action();
      } catch (error) {
        lastError = error;
        
        if (attempt < maxRetries) {
          await this.delay(delay);
          delay *= 2; // Exponential backoff
        }
      }
    }
    
    throw lastError;
  }

  async handleFlakiness(page, action) {
    return await this.retryAction(async () => {
      try {
        await action();
      } catch (error) {
        // Take screenshot for debugging
        await page.screenshot({ 
          path: `screenshots/flaky-${Date.now()}.png` 
        });
        throw error;
      }
    });
  }
}
```

#### **Graceful Error Recovery**
```javascript
test('should handle network errors gracefully', async ({ page, logger }) => {
  try {
    await page.goto('/api-dependent-page');
    
    // Wait for content or error state
    await Promise.race([
      page.waitForSelector('[data-testid="content"]'),
      page.waitForSelector('[data-testid="error-state"]')
    ]);
    
    // Check which state we're in
    const hasError = await page.locator('[data-testid="error-state"]').count() > 0;
    
    if (hasError) {
      logger.info('Page showing error state as expected');
      await expect(page.locator('[data-testid="retry-button"]')).toBeVisible();
    } else {
      await expect(page.locator('[data-testid="content"]')).toBeVisible();
    }
    
  } catch (error) {
    logger.error('Unexpected error in test', error);
    await page.screenshot({ path: `screenshots/network-error-${Date.now()}.png` });
    throw error;
  }
});
```

### **Performance Optimization**

#### **Efficient Waiting Strategies**
```javascript
// âœ… Good - Use Playwright's auto-waiting
await page.click('[data-testid="submit"]');
await expect(page.locator('[data-testid="success"]')).toBeVisible();

// âœ… Good - Wait for specific conditions
await page.waitForLoadState('networkidle');
await page.waitForURL('**/dashboard');

// â Œ Bad - Hard waits
await page.waitForTimeout(5000);
```

#### **Parallel Test Execution**
```javascript
// playwright.config.js
module.exports = defineConfig({
  // Enable full parallelization
  fullyParallel: true,
  
  // Optimize worker count
  workers: process.env.CI ? 2 : 4,
  
  // Shard tests across machines
  shard: process.env.SHARD ? {
    current: parseInt(process.env.SHARD.split('/')[0]),
    total: parseInt(process.env.SHARD.split('/')[1])
  } : undefined
});
```

### **Data Management**

#### **Test Data Patterns**
```javascript
// âœ… Dynamic data generation
const userData = {
  email: `user_${Date.now()}@example.com`,
  username: `user_${Math.random().toString(36).substr(2, 9)}`,
  timestamp: new Date().toISOString()
};

// âœ… Environment-specific data
const testData = {
  dev: { baseUrl: 'http://localhost:3000' },
  staging: { baseUrl: 'https://staging.example.com' },
  prod: { baseUrl: 'https://example.com' }
}[process.env.NODE_ENV];

// âœ… Fixture-based data
test('should work with user data', async ({ userData }) => {
  // userData provided by fixture
});
```

#### **Secrets Management**
```javascript
// âœ… Use environment variables for secrets
const credentials = {
  email: process.env.TEST_USER_EMAIL,
  password: process.env.TEST_USER_PASSWORD,
  apiKey: process.env.API_KEY
};

// âœ… Validate required secrets
if (!credentials.email || !credentials.password) {
  throw new Error('Required test credentials not found in environment');
}
```

---

## ðŸ › **Troubleshooting**

### **Common Issues & Solutions**

#### **1. Browser Installation Issues**
```bash
# Clear browser cache
rm -rf ~/.cache/ms-playwright

# Reinstall browsers
npx playwright install --force

# Install system dependencies (Ubuntu/Debian)
npx playwright install-deps

# Check browser installation
npx playwright install --dry-run
```

#### **2. Test Timeouts**
```javascript
// Increase timeouts for slow operations
test.setTimeout(120000); // 2 minutes for entire test

// Configure specific timeouts
await expect(page.locator('[data-testid="slow-element"]')).toBeVisible({ 
  timeout: 60000 
});

// Wait for network to be idle
await page.waitForLoadState('networkidle');
```

#### **3. Flaky Tests**
```javascript
// Add retry logic for flaky operations
const helpers = new TestHelpers();

await helpers.retryAction(async () => {
  await page.click('[data-testid="flaky-button"]');
  await expect(page.locator('[data-testid="result"]')).toBeVisible();
}, 3, 2000);

// Use soft assertions for non-critical checks
await expect.soft(page.locator('[data-testid="optional-element"]')).toBeVisible();
```

#### **4. Import/Export Errors**
```javascript
// âœ… Consistent CommonJS usage
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

// âœ… Consistent ES6 usage (if using modules)
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

// â Œ Don't mix module systems
```

#### **5. Debugging Tests**
```bash
# Debug mode with step-by-step execution
npx playwright test --debug

# Headed mode with slow motion
npx playwright test --headed --slowMo=1000

# Pause test execution for inspection
await page.pause();

# Enable trace recording
npx playwright test --trace=on
```

#### **6. Environment Issues**
```bash
# Check Node.js version
node --version  # Should be 18+

# Check Playwright version
npx playwright --version

# Verify environment variables
echo $NODE_ENV
echo $TEST_USER_EMAIL

# Clear npm cache
npm cache clean --force
```

### **Debug Tools & Techniques**

#### **Browser Developer Tools**
```javascript
// Open browser dev tools during test
await page.pause();

// Enable verbose logging
DEBUG=pw:* npx playwright test

// Record and replay actions
npx playwright codegen https://your-app.com
```

#### **Visual Debugging**
```javascript
// Take screenshots at key points
await page.screenshot({ path: 'debug-step1.png' });

// Highlight elements
await page.locator('[data-testid="button"]').highlight();

// Record video of test execution
// (automatically enabled on failure)
```

#### **Console Debugging**
```javascript
// Log page console messages
page.on('console', msg => console.log('PAGE LOG:', msg.text()));

// Log network requests
page.on('request', request => console.log('REQUEST:', request.url()));

// Log responses
page.on('response', response => console.log('RESPONSE:', response.url()));
```

### **Performance Troubleshooting**

#### **Slow Tests**
```javascript
// Profile test performance
console.time('test-duration');
// ... test code ...
console.timeEnd('test-duration');

// Check network requests
page.on('response', response => {
  if (response.request().resourceType() === 'xhr') {
    console.log(`API call took: ${response.timing().responseEnd}ms`);
  }
});
```

#### **Memory Issues**
```javascript
// Monitor memory usage
process.on('beforeExit', () => {
  const usage = process.memoryUsage();
  console.log(`Memory usage: ${Math.round(usage.heapUsed / 1024 / 1024)}MB`);
});

// Clean up resources
test.afterEach(async ({ page }) => {
  await page.close();
});
```

---

## ðŸ¤  **Contributing**

We welcome contributions from the community! Here's how to get involved:

### **Getting Started**

#### **1. Fork & Clone**
```bash
# Fork the repository on GitHub
git clone https://github.com/amit/DemoFramework_PlayWright.git
cd DemoFramework_PlayWright
```

#### **2. Setup Development Environment**
```bash
# Install dependencies
npm install

# Install pre-commit hooks
npm run prepare

# Run tests to ensure everything works
npm test
```

#### **3. Create Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

### **Development Guidelines**

#### **Code Style**
- Use **ESLint** and **Prettier** configurations
- Follow **JavaScript Standard Style**
- Add **JSDoc** comments for functions
- Use **descriptive variable names**

#### **Testing Your Changes**
```bash
# Run all tests
npm test

# Run linting
npm run lint

# Run type checking
npm run type-check

# Test your specific changes
npx playwright test your-new-test.js
```

#### **Commit Guidelines**
```bash
# Use conventional commit messages
git commit -m "feat: add new page object for checkout"
git commit -m "fix: resolve timeout issue in login test"
git commit -m "docs: update installation instructions"
```

### **Pull Request Process**

#### **1. Before Submitting**
- [ ] All tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] No breaking changes (or clearly documented)

#### **2. PR Description Template**
```markdown
## What does this PR do?
Brief description of changes

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Added tests for new functionality
- [ ] All existing tests pass
- [ ] Manual testing completed

## Screenshots/Recordings
(if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

#### **3. Review Process**
1. **Automated checks** must pass (CI/CD pipeline)
2. **Code review** by at least one maintainer
3. **Manual testing** if UI changes involved
4. **Approval** and merge by maintainer

### **Types of Contributions**

#### **ðŸ › Bug Fixes**
- Fix failing tests
- Resolve framework issues  
- Improve error handling

#### **âœ¨ New Features**
- New page objects
- Additional utilities
- Enhanced reporting
- CI/CD improvements

#### **ðŸ“š Documentation**
- README improvements
- Code examples
- Best practices guides
- Video tutorials

#### **ðŸ§ª Testing**
- Add test coverage
- Improve test reliability
- Performance optimizations

### **Community Guidelines**

- **Be respectful** and inclusive
- **Help others** learn and contribute
- **Share knowledge** through documentation
- **Report issues** with clear reproduction steps
- **Provide feedback** on PRs and issues

---

## ðŸ“ž **Support & Resources**

### **Getting Help**

#### **ðŸ“‹ Issue Reporting**
Have a bug or feature request? Please use our issue templates:

- **ðŸ › Bug Report**: [Create Bug Report](https://github.com/amit-org/DemoFramework_PlayWright/issues/new?template=bug_report.md)
- **âœ¨ Feature Request**: [Request Feature](https://github.com/amit-org/DemoFramework_PlayWright/issues/new?template=feature_request.md)
- **â “ Question**: [Ask Question](https://github.com/amit-org/DemoFramework_PlayWright/discussions/new)

#### **ðŸ’¬ Community Support**
- **GitHub Discussions**: [Community Forum](https://github.com/amit-org/DemoFramework_PlayWright/discussions)
- **Slack Channel**: `#playwright-automation` in our workspace
- **Stack Overflow**: Tag your questions with `playwright-framework`

#### **ðŸ“– Documentation**
- **Official Playwright Docs**: [playwright.dev](https://playwright.dev/)
- **Framework Wiki**: [Internal Documentation](https://github.com/amit-org/DemoFramework_PlayWright/wiki)
- **Video Tutorials**: [YouTube Playlist](https://youtube.com/playlist/your-playlist)

### **Learning Resources**

#### **ðŸ“š Recommended Reading**
- [Playwright Best Practices Guide](https://playwright.dev/docs/best-practices)
- [Page Object Model Pattern](https://martinfowler.com/bliki/PageObject.html)
- [Test Automation Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)

#### **ðŸŽ¥ Video Resources**
- [Playwright Framework Setup Tutorial](https://youtube.com/watch?v=your-video)
- [Advanced Testing Patterns](https://youtube.com/watch?v=your-video)
- [CI/CD Integration Guide](https://youtube.com/watch?v=your-video)

#### **ðŸ› ï¸  Tool References**
- [Playwright Inspector](https://playwright.dev/docs/debug#playwright-inspector)
- [Test Generator](https://playwright.dev/docs/codegen-intro)
- [Trace Viewer](https://playwright.dev/docs/trace-viewer-intro)

### **Enterprise Support**

#### **ðŸ ¢ Professional Services**
For enterprise customers, we offer:
- **Custom framework setup** and optimization
- **Team training** and workshops
- **Dedicated support** channels
- **Architecture consulting** for large-scale implementations

Contact: [enterprise@example.com](mailto:enterprise@example.com)

#### **ðŸ”’ Security**
Report security vulnerabilities privately to: [security@example.com](mailto:security@example.com)

### **Changelog & Updates**

#### **ðŸ“¦ Release Notes**
Stay updated with the latest changes:
- [Releases](https://github.com/amit-org/DemoFramework_PlayWright/releases)
- [Changelog](https://github.com/amit-org/DemoFramework_PlayWright/blob/main/CHANGELOG.md)

#### **ðŸ”” Notifications**
- **Watch** this repository for updates
- **Subscribe** to release notifications
- **Follow** [@PlaywrightFramework](https://twitter.com/PlaywrightFramework) on Twitter

---

## ðŸ“„ **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- âœ… **Commercial use** allowed
- âœ… **Modification** allowed  
- âœ… **Distribution** allowed
- âœ… **Private use** allowed
- â — **License and copyright notice** required
- â — **No warranty** provided

---

## ðŸ™  **Acknowledgments**

### **Special Thanks**

- **[Playwright Team](https://playwright.dev/)** - For creating an amazing testing framework
- **[Microsoft](https://github.com/microsoft/playwright)** - For maintaining and supporting Playwright
- **Community Contributors** - Everyone who has contributed to this project
- **Beta Testers** - Early adopters who helped refine the framework

### **Built With**

- [Playwright](https://playwright.dev/) - Web testing framework
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Winston](https://github.com/winstonjs/winston) - Logging library
- [Allure](https://docs.qameta.io/allure/) - Test reporting
- [GitHub Actions](https://github.com/features/actions) - CI/CD automation

### **Inspiration**

This framework was inspired by:
- Real-world enterprise testing challenges
- Community best practices and patterns  
- Modern DevOps and CI/CD workflows
- The need for maintainable test automation

---

<div align="center">

### **Ready to Start Testing?**

```bash
git clone https://github.com/amit-org/DemoFramework_PlayWright.git
cd DemoFramework_PlayWright
npm install && npx playwright install
npm test
```

**ðŸŽ­ Happy Testing with Playwright! âœ¨**

---

*Made with â ¤ï¸  by the Test Automation Community*

</div>
