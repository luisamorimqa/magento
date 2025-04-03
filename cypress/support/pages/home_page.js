const elements = {
    text: {
        title: '.base',
        emptyCart: '.subtitle.empty'
    },

    buttons: {
        showCart: '.showcart'
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
    }
}