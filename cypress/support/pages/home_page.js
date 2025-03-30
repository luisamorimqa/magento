const elements = {
    text: {
        title: '.page-title > span'
    }
}

export default {

    checkTitle() {
        cy.get(elements.text.title)
            .should('be.visible')
            .and('have.text', 'My Account')
    }
}