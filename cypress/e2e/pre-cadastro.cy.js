/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');


describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });


    it('Deve completar o pré cadastro com sucesso', () => {

        var nomezinhoFake = faker.name.firstName()
        var emailFaker = faker.internet.email(nomezinhoFake)
        var sobrenFaker = faker.name.lastName()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('!teste@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomezinhoFake)
        cy.get('#account_last_name').type(sobrenFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')




    });














});