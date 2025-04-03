import { faker } from '@faker-js/faker'
import createUser_page from '../support/pages/createUser_page'
import login_page from '../support/pages/login_page'
import home_page from '../support/pages/my_account_page'

describe('Create User', () => {

    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    beforeEach('Acessar create user page', () => {
        cy.visit('/customer/account/login')
        login_page.clickCreateAccount()
        createUser_page.checkTitle()
    })

    it('Campo "First Name" obrigatório', () => {
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(user.email)
        createUser_page.fillPassword(user.password)        
        createUser_page.fillConfirmPassword(user.password)
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessageFirstName()
    })

    it('Campo "Last Name" obrigatório', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillEmail(user.email)
        createUser_page.fillPassword(user.password)        
        createUser_page.fillConfirmPassword(user.password) 
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessageLastName()
    })

    it('Campo "Email" obrigatório', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillPassword(user.password)        
        createUser_page.fillConfirmPassword(user.password) 
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessageEmail()
    })

    it('Formato inválido de email', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail('testes.com')
        createUser_page.fillPassword(user.password)        
        createUser_page.fillConfirmPassword(user.password) 
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessageEmailInvalid()
    })

    it('Campo "Password" obrigatório', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(user.email)        
        createUser_page.fillConfirmPassword(user.password)
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessagePasswordObrigatorio()
    })

    it('Campo "Confirm Password" obrigatório', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(user.email)
        createUser_page.fillPassword(user.password)   
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessagePasswordConfirmationInvalid()
    })

    it('Senhas não coincidem', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(faker.internet.email())
        createUser_page.fillPassword(user.password)        
        createUser_page.fillConfirmPassword(faker.internet.password())
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessagePasswordConfirmationInvalid()
    })

    it('Senha com menos de 8 caracteres', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(user.email)
        createUser_page.fillPassword('123')  
        createUser_page.fillConfirmPassword('123')      
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessagePasswordInvalido()
    })

    it('Senha sem números', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(user.email)
        createUser_page.fillPassword('qwe')  
        createUser_page.fillConfirmPassword('qwe')      
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessagePasswordSemNumeros()
    })
    
    it('Senha sem caracteres especiais', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(user.email)
        createUser_page.fillPassword('qwe')  
        createUser_page.fillConfirmPassword('qwe')      
        createUser_page.clickCreateAnAccount()
        createUser_page.checkErrorMessageSemCaracteresEspeciais()
    })

    it('Cadastro com dados válidos', () => {
        createUser_page.fillFirstName(user.firstName)
        createUser_page.fillLastName(user.lastName)
        createUser_page.fillEmail(user.email)
        createUser_page.fillPassword(user.password)  
        createUser_page.fillConfirmPassword(user.password)      
        createUser_page.clickCreateAnAccount()
        home_page.checkTitle()
    })

    it('Cadastro com email já existente', () => {
        createUser_page.fillFirstName(Cypress.env('firstname_existente'))
        createUser_page.fillLastName(Cypress.env('lastname_existente'))
        createUser_page.fillEmail(Cypress.env('email_existente'))
        createUser_page.fillPassword(Cypress.env('password_existente'))  
        createUser_page.fillConfirmPassword(Cypress.env('password_existente'))      
        createUser_page.clickCreateAnAccount()
        createUser_page.checkAlreadyUserMessage()

    })
})