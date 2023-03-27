/// <reference types="cypress"/> 


describe('Funcionalidade pág de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });



    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });


    it.only('Deve adicionar um produto no carrinho', () => {
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()












    });










});



