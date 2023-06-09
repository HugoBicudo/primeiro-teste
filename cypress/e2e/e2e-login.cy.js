/// <reference types="cypress"/>

const perfil = require('../fixtures/perfil.json')



describe('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  });




  it('Deve fazer login com sucesso', () => {

    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@tescomte.')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')

  })




  it('Deve exibir uma mensagem de erro ao inserir o usuário ou senha invalidos', () => {

    cy.get('#username').type('aluno_ebac@teste.')
    cy.get('#password').type('teste@teste.')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro')


  })


  it.only('Deve fazer o login com arquivo de dados', () => {

    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

  })

  it('Deve exibir uma mensagem de erro ao inserir a senha invalida', () => {

    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro')



  })










}) 