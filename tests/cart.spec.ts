import {test, expect} from '@playwright/test';
test('Add to cart test', async ({page})=>{

    //step-1: goto SouceDemo
    await page.goto('https://www.saucedemo.com'); 

    //Step-2: login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');

//Step 3: Add top cart on first product
await page.click('#add-to-cart-sauce-labs-backpack');

//Step 4: check cart badge shows 1 item 
await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
   


}


);