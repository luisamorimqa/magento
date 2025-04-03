import home_page from '../support/pages/home_page'
import login_page from '../support/pages/login_page'

describe('home', () => {

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
            .get('.base')
            .should('be.visible')
            .and('have.text', 'Home Page')
    })

    it('Validar mensagem carrinho vazio', () => {
        home_page.clickShowCart()
        home_page.checkMessageEmptyCart()
    })
})