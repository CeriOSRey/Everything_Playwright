import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

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
  // testMatch: ['tests/basicInteractions.spec.ts'],   // launch specific test file
  use: {
    headless: false,
    screenshot: "on",
    video: "on",
    // launchOptions: {slowMo:1000}                // slow down the test
  },
  retries: 0,
  reporter: [
    ["dot"], 
    ["json", {outputfile: "jsonReports/jsonReport.json"}], 
    ["html", {open: "always"}]],
};

export default config;
