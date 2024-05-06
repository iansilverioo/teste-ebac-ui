/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('contato.iansilverio@gmail.com')
        cy.get('#password').type('Ian230599!')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, contato.iansilverio (não é contato.iansilverio? Sair)')
    })
})