import mensJackets_page from '../support/pages/mensJackets_page'
import login_page from '../support/pages/login_page'

describe('Mens Jacket', () => {

const user = {
    email: Cypress.env('email'),
    password: Cypress.env('password')
}

    beforeEach(() => {
        cy.visit('/customer/account/login')
                    .get('.base')
                    .should('be.visible')
                    .and('have.text', 'Customer Login')
        
                login_page.fillEmail(user.email)
                login_page.fillPassword(user.password)
                login_page.clickSignIn()

                cy.visit('/')
                    .get('.logo')
                    .should('be.visible')

                cy.visit('/men/tops-men/jackets-men.html')
                    .get('.base')
                    .should('be.visible')
                    .and('have.text', 'Jackets')
    })

    it('Adicionar ao carrinho', () => {
        mensJackets_page.checkTitle()
        mensJackets_page.clickJacket()
        mensJackets_page.clickSizeL()
        mensJackets_page.selectColorOrange()
        mensJackets_page.fillQtd(2)
        mensJackets_page.addToCart()
        mensJackets_page.checkMessageSuccessAddToCart()
    })
})