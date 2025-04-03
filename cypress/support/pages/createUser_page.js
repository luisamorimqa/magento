const elements = {
    text: {
        title: '.base'
    },

    field: {
        firstName: '#firstname',
        lastName: '#lastname',
        email: '#email_address',
        password: '#password',
        confirmPassword: '#password-confirmation'
    },

    button: {
        createAnAccount: '.submit'
    },

    message: {
        firstNameError: '#firstname-error',
        lastNameError: '#lastname-error',
        emailError: '#email_address-error',
        emailInvalido: '#email_address-error',
        passwordObrigatorio: '#password-error',
        passwordInvalido: '#password-error',
        passwordConfirmationInvalid: '#password-confirmation-error',
        alreadyUser: '.error > div'
    }
}

export default { 
        
    fillFirstName(firstName) {
        cy.get(elements.field.firstName)
            .should('be.visible')
            .should('be.enabled')
            .type(firstName)
    },

    fillLastName(lastName) {
        cy.get(elements.field.lastName)
            .should('be.visible')
            .should('be.enabled')
            .type(lastName)
    },

    fillEmail(email) {
        cy.get(elements.field.email)
            .should('be.visible')
            .should('be.enabled')
            .type(email)
    },    

    fillPassword(password) {
        cy.get(elements.field.password)
            .should('be.visible')
            .should('be.enabled')
            .type(password)
    },    

    fillConfirmPassword(password) {
        cy.get(elements.field.confirmPassword)        
            .should('be.visible')        
            .should('be.enabled')        
            .type(password)
    },

    clickCreateAnAccount() {
        cy.get(elements.button.createAnAccount)
            .should('be.visible')
            .should('be.enabled')
            .click()
    },

    checkTitle() {
        cy.get(elements.text.title)
            .should('be.visible')
            .and('have.text', "Create New Customer Account")
    },

    checkErrorMessageFirstName() {
        cy.get(elements.message.firstNameError)
            .should('be.visible')
            .and('have.text', 'This is a required field.')
    },

    checkErrorMessageLastName() {
        cy.get(elements.message.lastNameError)
            .should('be.visible')
            .and('have.text', 'This is a required field.')
    },

    checkErrorMessageEmail() {        
        cy.get(elements.message.emailError)
            .should('be.visible')
            .and('have.text', 'This is a required field.')
    },

    checkErrorMessageEmailInvalid() {
        cy.get(elements.message.emailInvalido)
            .should('be.visible')
            .and('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    },

    checkErrorMessagePasswordObrigatorio() {
        cy.get(elements.message.passwordObrigatorio)
            .should('be.visible')
            .and('have.text', 'This is a required field.')
    },

    checkErrorMessagePasswordInvalido() {
        cy.get(elements.message.passwordInvalido)
            .should('be.visible')
            .and('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    },

    checkErrorMessagePasswordSemNumeros() {
        cy.get(elements.message.passwordInvalido)
            .should('be.visible')
            .and('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    },

    checkErrorMessageSemCaracteresEspeciais() {
        cy.get(elements.message.passwordInvalido)
            .should('be.visible')
            .and('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    },

    checkErrorMessagePasswordConfirmationInvalid() {
        cy.get(elements.message.passwordConfirmationInvalid)
            .should('be.visible')
            .and('have.text', 'Please enter the same value again.')
    },

    checkAlreadyUserMessage() {
        cy.get(elements.message.alreadyUser)
            .should('be.visible')
            .and('have.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    }
}