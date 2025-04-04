import login_page from '../support/pages/login_page'
import my_wish_list_page from '../support/pages/my_wish_list_page'

describe('wishList', () => {

    const user = {
        email: Cypress.env('email'),
        password: Cypress.env('password')
    }

    beforeEach(() => {

        login_page.login(user.email, user.password)
        cy.visit('/wishlist/')
    })

    it('Validar mensagem wishList vazio', () => {

        my_wish_list_page.checkMessageEmptyWishList()
    })
})