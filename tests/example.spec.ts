/// <reference types="node" />
import { test, expect } from '@playwright/test';
import process from 'process';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('login, add ZARA COAT 3 to cart, and verify it at checkout', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  await page.fill('#userEmail', 'amruta.amy111@gmail.com');
  await page.fill('#userPassword', 'Chocolate@123');
  await page.click('input#login');

  await page.waitForURL('**/dashboard/**', { timeout: 30000 });

  const productCard = page.locator('.card-body', { hasText: 'ZARA COAT 3' });
  await expect(productCard).toBeVisible();

  await productCard.locator('text=Add To Cart').first().click();

  await page.click('a:has-text("Cart"), button:has-text("Cart"), a[href*="cart"]');
  await page.waitForURL('**/cart', { timeout: 30000 });

  const cartItem = page.locator('div:has-text("ZARA COAT 3"), li:has-text("ZARA COAT 3"), td:has-text("ZARA COAT 3")');
  await expect(cartItem.first()).toBeVisible();
});
