import home_page from '../support/pages/home_page'
import login_page from '../support/pages/login_page'
import mensJackets_page from '../support/pages/mensJackets_page'

describe('Cart', () => {

    const user = {
        email: Cypress.env('email'),
        password: Cypress.env('password')
    }

    beforeEach(() => {
        cy.visit('/customer/account/login')
        login_page.fillEmail(user.email)
        login_page.fillPassword(user.password)
        login_page.clickSignIn()
        cy.visit('/')
        home_page.checkTitle()
    })

    it.only('Validar mensagem carrinho vazio', () => {
        home_page.clickShowCart()
        home_page.clickClearCart()
        home_page.checkMessageEmptyCart()
    })

    it('Validar carrinho com item', () => {
        cy.visit('/men/tops-men/jackets-men.html')
        mensJackets_page.clickJacket()
        mensJackets_page.clickSizeL()
        mensJackets_page.selectColorOrange()
        mensJackets_page.fillQtd(2)
        mensJackets_page.addToCart()
        home_page.clickShowCart()
        home_page.checkMessageProductInCart()
    })
})