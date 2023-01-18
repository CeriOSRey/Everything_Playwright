import { test, expect } from '@playwright/test';

// page parameter replaces the browser, context and page initialization
test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span')
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('johndoe@email.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').press('ArrowLeft');
  await page.getByPlaceholder('E-Mail').fill('johndoe@email.com');
  await page.getByRole('button', { name: 'Continue' }).click();
});