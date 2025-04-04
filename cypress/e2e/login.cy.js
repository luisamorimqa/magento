import login_page from '../support/pages/login_page'
import home_page from '../support/pages/my_account_page'

const user = {
    email: Cypress.env('email_existente'),
    password: Cypress.env('password_existente')
}

describe('Login', () => {

    beforeEach(() => {
        cy.visit('/customer/account/login')
            .get('.base')
            .should('be.visible')
            .and('have.text', 'Customer Login')
    })

    it('Login sem informar email', () => {
        login_page.fillPassword(user.password)
        login_page.clickSignIn()
        login_page.checkErrorMessageEmail('This is a required field.')
    })

    it('Login informando email inválido', () => {
        login_page.fillEmail('testes.com')
        login_page.fillPassword(user.password)
        login_page.clickSignIn()
        login_page.checkErrorMessageEmail('Please enter a valid email address (Ex: johndoe@domain.com).')
    })

    it('Login sem informar senha', () => {
        login_page.fillEmail(user.email)
        login_page.clickSignIn()
        login_page.checkErrorMessagePassword('This is a required field.')
    })

    it.only('Login informando senha inválida', () => { 
        login_page.fillEmail(user.email)
        login_page.fillPassword('1')
        login_page.clickSignIn()
        login_page.checkErrorMessagePasswordInvalid('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })

    it('Login com sucesso', () => {
        login_page.fillEmail(user.email)
        login_page.fillPassword(user.password)
        login_page.clickSignIn()
        home_page.checkTitle()
    })
})