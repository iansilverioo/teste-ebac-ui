/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('contato.iansilverio@gmail.com')
        cy.get('#password').type('Ian230599!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, contato.iansilverio')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {    
        cy.get('#username').type('contiansilverio@gmail.com')
        cy.get('#password').type('Ian230599!')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('contato.iansilverio@gmail.com')
        cy.get('#password').type('ian230599')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail contato.iansilverio@gmail.com está incorreta.')
    });

})