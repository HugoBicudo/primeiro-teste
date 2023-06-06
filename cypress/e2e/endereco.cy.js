///<reference types="cypress" />

import enderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        });

    });


    it('Deve fazer cadastro de faturamento com sucesso ', () => {

        enderecoPage.editarEnderecoFaturamento('Heitor', 'Bicudo', 'Cem', 'Brasil', 'travessa francisco', '198', 'Angra dos reis', 'Rio de janeiro', '18891000', '24998675436', 'heitor@teste.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.') 


    });

    it.only('Deve fazer cadastro de faturamento com sucesso - usando massa de dados em lista', () => {

        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nomi,
            dadosEndereco[0].sobrenome, 
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email,
            )

        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.') 


    });
});