describe('Perform login', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
    });

    it('Products (1) title is displayed', async () => {
        await expect($('.title')).toBeExisting()
    });

    it('Shopping Cart icon (2) is displayed', async () => {
        await expect($('.shopping_cart_link')).toBeExisting()
    });

    it('More than 1 product (3) is displayed', async () => {
        await expect($$('.inventory_item')).toBeExisting()
    });
});

describe('Add product to the cart', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
    });

    it('Add the first product to the cart by clicking Add to Cart button', async () => {
        await $('#add-to-cart-sauce-labs-backpack').click()
    });

    it('Verify Shopping Cart icon contains the number of products added (equal 1)', async () => {
        await expect($('.shopping_cart_badge')).toHaveTextContaining(
            '1')
    });
        
    it('Open the Shopping Cart and verify the added product is displayed', async () => {
        const firstProduct = await $('#item_4_title_link');
        await $('.shopping_cart_link').click();
        await expect(firstProduct).toBeExisting();
    });

    it('Remove the product by clicking Remove', async () => {
        await $('#remove-sauce-labs-backpack').click();
    });

    it.only('Verify no products are available in the Shopping Cart', async () => {
        console.log($$('.cart_item'));
        await expect($$('.cart_item')) === [];
    });

})
