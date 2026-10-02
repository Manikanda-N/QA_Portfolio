import {  Page } from'@playwright/test';
export class CartPage {
    constructor(private page: Page) {}

    async addToCart() {
        await this.page.click('#add-to-cart-sauce-labs-backpack');
    }

    async goToCart(){
        await this.page.click('.shopping_cart_link');
    }

    async getCartBadge(){
        return this.page.locator('.shopping_cart_badge');

    }


}