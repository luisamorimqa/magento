const elements = { 
    text: {
        title: '.base',
        item: '.item > span',
        price: 'th.col.price',
        qty: 'th.col.qty',
        subtotal: 'th.col.subtotal',
        summary: '.summary'
    },
    buttons: {
        updateCart: '.update'
    }
}

export default {
    
    clickProceedToCheckout() {
        cy.contains('Proceed to Checkout')
            .should('be.visible')
            .click()
    }
}
