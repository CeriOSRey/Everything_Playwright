import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { capabilities } from './crossbrowser/capabilities';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

// add headless here so we dont have to add it in every file

const config: PlaywrightTestConfig = {
  // This is how you do crossbrowser in config level
  // can also do --project=chrome flag in the test script in package.json
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"]
      }
    },
    {
      name: "firefox",
      use: {
        ...devices['Desktop Firefox']
      }
    }
  ],

  testMatch: ['fixtures/pomTestWithCustomFixture.spec.ts'],   // launch specific test file
  use: {
    channel: 'chrome',
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php?',
    headless: false,
    screenshot: "on",
    video: "on",
    // connectOptions: {
      // integrating lambdatest to playwright test runner via the config file. Need to import capabilities.
      // NOT SUGGESTED APPROACH
      // wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    // }
    // launchOptions: {slowMo:1000}                // slow down the test
  },
  retries: 0,
  reporter: [
    ["dot"], 
    ["json", {outputfile: "jsonReports/jsonReport.json"}], 
    ["html", {open: "always"}]],
};

export default config;
