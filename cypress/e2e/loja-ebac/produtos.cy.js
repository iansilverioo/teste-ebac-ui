/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve visitar a página do produto', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.visitarProduto('aether gym pant')
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Purple', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });
    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        
    });
});