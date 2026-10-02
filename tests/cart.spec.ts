import {test, expect} from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';


test('Add to cart test', async ({page})=>{

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 2: Login first
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

     await cartPage.addToCart();

      // Step 4: Check cart badge shows 1
    const cartBadge = await cartPage.getCartBadge();
    await expect(cartBadge).toHaveText('1');
});