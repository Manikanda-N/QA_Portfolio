import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';

test('Checkout test', async ({ page }) => {

    // Step 1: Create page objects
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    

    // Step 2: Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 3: Add product to cart
    await cartPage.addToCart();

    // Step 4: Go to cart
    await checkoutPage.goToCart();

    // Step 5: Click checkout
    await checkoutPage.clickCheckoutButton();

    // Step 6: Fill customer details
    await checkoutPage.fillDetails('Sevner', 'QA', '641001');

    // Step 7: Click continue
    await checkoutPage.clickContinueButton();

    // Step 8: Click finish
    await checkoutPage.clickFinish();

    // Step 9: Check confirmation message
    const message = await checkoutPage.getConfirmationMessage();
    await expect(message).toHaveText('Thank you for your order!');

});