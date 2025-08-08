module.exports = {
  baseURL: 'https://www.saucedemo.com/',
  timeout: 30000,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
  headless: true,
  slowMo: 0,
  ignoreHTTPSErrors: true,
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9'
  },
};
