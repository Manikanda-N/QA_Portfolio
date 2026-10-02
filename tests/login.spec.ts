import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test('valid login page', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_password');

    const errorMessage = await loginPage.getErrorMessage();
    await expect(errorMessage).toBeVisible();
});
