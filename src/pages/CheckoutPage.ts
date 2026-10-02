import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    async goToCart(){
        await this.page.click('.shopping_cart_link');
    }


    async clickCheckoutButton(){
        await this.page.click('#checkout');
    }

     async fillDetails(firstName: string, lastName: string, postalCode: string) 
    {
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);

        }

        async clickContinueButton(){
            await this.page.click('#continue');
        }

        async clickFinish(){
            await this.page.click('#finish');
        }

        async getConfirmationMessage(){
            return this.page.locator('.complete-header');
        }


} 