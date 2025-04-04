const elements = {
    text: {
        title: '.base',
        emptyCart: '.subtitle.empty',
        itemsCart: '#minicart-content-wrapper > div.block-content > div.items-total > span:nth-child(2)'
    },

    buttons: {
        showCart: '.showcart',
        clearCart: '.delete'
    }
}

export default {

    checkTitle() {
        cy.get(elements.text.title)
            .should('be.visible')
            .and('have.text', 'Home Page')

    },

    clickShowCart() {
        cy.get(elements.buttons.showCart)
            .should('be.visible')
            .click()
    },

    checkMessageEmptyCart() {
        cy.get(elements.text.emptyCart)
            .should('be.visible')
            .and('have.text', 'You have no items in your shopping cart.')
    },

    clickClearCart() {
        cy.get(elements.buttons.clearCart)
            .should('be.visible')
            .click()
    },

    checkMessageProductInCart() {
        cy.get(elements.text.itemsCart)
            .should('be.visible')
            .and('have.text', 'Item in Cart')
    }
}