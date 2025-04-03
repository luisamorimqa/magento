const elements = {
    text: {
        title: '.base'
    },
    fields: {
        email: '#email',
        password: '#pass'
    },
    buttons: {
        createAccount: '.create',
        signIn: '.action.login'
    },
    messages: {
        errorEmail: '#email-error',
        errorPassword: '#pass-error',
        passwordInvalid: '.message-error > div'
    }
}

export default {    

    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    clickCreateAccount() {
        cy.get(elements.buttons.createAccount)
            .should('be.visible')
            .click()
    },

    clickSignIn() {
        cy.get(elements.buttons.signIn)
            .should('be.visible')
            .click()
    },

    checkErrorMessageEmail(message) {
        cy.get(elements.messages.errorEmail)
            .should('be.visible')
            .and('have.text', message)
    },

    checkErrorMessagePassword(message) {
        cy.get(elements.messages.errorPassword)
            .should('be.visible')
            .and('have.text', message)
    },
    
    checkErrorMessagePasswordInvalid(message) {
        cy.get(elements.messages.passwordInvalid)
            .should('be.visible')
            .and('have.text', message)
    }
}