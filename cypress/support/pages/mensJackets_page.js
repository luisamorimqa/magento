const elements = {
    text: {
        title: '.base',
        messageSuccessAddToCart: '.message-success > div'
    },

    product: {
        name: '.base',
        jacket: '#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > a > span > span > img'
    },

    size: {
        l: '#option-label-size-143-item-169'
    },

    color: {
        orange: '#option-label-color-93-item-56'
    },

    field: {
        qtd: '#qty'
    },

    button: {
        addToCart: '.action.tocart'
    }
}

export default {
    checkTitle() {
        cy.get(elements.text.title)
            .should('be.visible')
            .and('have.text', 'Jackets')
    },

    clickJacket() {
        cy.get(elements.product.jacket)
            .should('be.visible')
            .click()
    },

    clickSizeL() {
        cy.get(elements.size.l)
            .click()
    },

    fillQtd(value) {
        cy.get(elements.field.qtd)
            .clear()
            .type(value)
    },

    selectColorOrange() {
        cy.get(elements.color.orange)
            .click()
    },

    addToCart() {
        cy.get(elements.button.addToCart)
            .should('be.visible')
            .click()
    },

    checkMessageSuccessAddToCart() {
        cy.get(elements.product.name)
            .invoke('text')
            .then((productName) => {
                cy.get(elements.text.messageSuccessAddToCart)
                    .should('be.visible')
                    .and('contains.text', `You added ${productName} to your shopping cart.`)
            })          
    }
}