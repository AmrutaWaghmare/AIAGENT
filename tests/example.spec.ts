import { test, expect } from '@playwright/test';

const email = process.env.TEST_EMAIL ?? '';
const password = process.env.TEST_PASSWORD ?? '';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('login flow can run when credentials are configured', async ({ page }) => {
  test.skip(!email || !password, 'Set TEST_EMAIL and TEST_PASSWORD to run this test.');

  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.fill('#userEmail', email);
  await page.fill('#userPassword', password);
  await page.click('input#login');

  await page.waitForURL('**/dashboard/**', { timeout: 30000 });
  await expect(page).toHaveURL(/dashboard/);
});
