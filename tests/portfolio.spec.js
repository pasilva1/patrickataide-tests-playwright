const { test, expect } = require('@playwright/test');

test.describe('Portfolio Patrick Ataíde', () => {
  test('FT-001 - Carregamento da página inicial', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Patrick Ataíde/);
  });

  test('FT-003 - Seção de Tecnologias', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Playwright')).toBeVisible();
    await expect(page.locator('text=Cypress')).toBeVisible();
  });

  test('FT-004 - Informações de contato', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=patrickataide.ti@gmail.com')).toBeVisible();
  });
});
