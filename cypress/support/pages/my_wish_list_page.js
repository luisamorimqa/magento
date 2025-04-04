const elements = {
    text: {
        title: '.base',
        msgSuccessRemoveItem: '.message-success > div',
        msgEmptyWishList: '.info.empty > span'
    }
}

export default {

    checkTitle() { 
        cy.get(elements.text.title)
            .should('be.visible')
            .and('have.text', 'My Wish List')
    },

    checkMessageEmptyWishList() {
        cy.get(elements.text.msgEmptyWishList)
            .should('be.visible')
            .and('have.text', 'You have no items in your wish list.')
    }
}