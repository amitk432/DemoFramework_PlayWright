module.exports = {
  baseURL: 'https://www.saucedemo.com/',
  timeout: 45000,
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
  headless: true,
  slowMo: 100,
  ignoreHTTPSErrors: false,
  extraHTTPHeaders: {
    'Accept-Language': 'en-US,en;q=0.9',
    'Authorization': `Bearer ${process.env.STAGING_API_TOKEN}`
  },
};
