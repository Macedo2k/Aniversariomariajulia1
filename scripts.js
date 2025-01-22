// Lista de 30 produtos (total editável)
const produtos = [
    { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 29.99, imagem: 'produto1.jpg' },
    { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 49.99, imagem: 'produto2.jpg' },
    { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 19.99, imagem: 'produto3.jpg' },
    { id: 4, nome: 'Produto 4', descricao: 'Descrição do Produto 4', preco: 39.99, imagem: 'produto4.jpg' },
    { id: 5, nome: 'Produto 5', descricao: 'Descrição do Produto 5', preco: 59.99, imagem: 'produto5.jpg' },
    { id: 6, nome: 'Produto 6', descricao: 'Descrição do Produto 6', preco: 99.99, imagem: 'produto6.jpg' },
    { id: 7, nome: 'Produto 7', descricao: 'Descrição do Produto 7', preco: 24.99, imagem: 'produto7.jpg' },
    { id: 8, nome: 'Produto 8', descricao: 'Descrição do Produto 8', preco: 74.99, imagem: 'produto8.jpg' },
    { id: 9, nome: 'Produto 9', descricao: 'Descrição do Produto 9', preco: 19.99, imagem: 'produto9.jpg' },
    { id: 10, nome: 'Produto 10', descricao: 'Descrição do Produto 10', preco: 39.99, imagem: 'produto10.jpg' },
    { id: 11, nome: 'Produto 11', descricao: 'Descrição do Produto 11', preco: 29.99, imagem: 'produto11.jpg' },
    { id: 12, nome: 'Produto 12', descricao: 'Descrição do Produto 12', preco: 59.99, imagem: 'produto12.jpg' },
    { id: 13, nome: 'Produto 13', descricao: 'Descrição do Produto 13', preco: 39.99, imagem: 'produto13.jpg' },
    { id: 14, nome: 'Produto 14', descricao: 'Descrição do Produto 14', preco: 19.99, imagem: 'produto14.jpg' },
    { id: 15, nome: 'Produto 15', descricao: 'Descrição do Produto 15', preco: 59.99, imagem: 'produto15.jpg' },
    { id: 16, nome: 'Produto 16', descricao: 'Descrição do Produto 16', preco: 34.99, imagem: 'produto16.jpg' },
    { id: 17, nome: 'Produto 17', descricao: 'Descrição do Produto 17', preco: 49.99, imagem: 'produto17.jpg' },
    { id: 18, nome: 'Produto 18', descricao: 'Descrição do Produto 18', preco: 59.99, imagem: 'produto18.jpg' },
    { id: 19, nome: 'Produto 19', descricao: 'Descrição do Produto 19', preco: 29.99, imagem: 'produto19.jpg' },
    { id: 20, nome: 'Produto 20', descricao: 'Descrição do Produto 20', preco: 39.99, imagem: 'produto20.jpg' },
    { id: 21, nome: 'Produto 21', descricao: 'Descrição do Produto 21', preco: 19.99, imagem: 'produto21.jpg' },
    { id: 22, nome: 'Produto 22', descricao: 'Descrição do Produto 22', preco: 79.99, imagem: 'produto22.jpg' },
    { id: 23, nome: 'Produto 23', descricao: 'Descrição do Produto 23', preco: 89.99, imagem: 'produto23.jpg' },
    { id: 24, nome: 'Produto 24', descricao: 'Descrição do Produto 24', preco: 69.99, imagem: 'produto24.jpg' },
    { id: 25, nome: 'Produto 25', descricao: 'Descrição do Produto 25', preco: 39.99, imagem: 'produto25.jpg' },
    { id: 26, nome: 'Produto 26', descricao: 'Descrição do Produto 26', preco: 29.99, imagem: 'produto26.jpg' },
    { id: 27, nome: 'Produto 27', descricao: 'Descrição do Produto 27', preco: 54.99, imagem: 'produto27.jpg' },
    { id: 28, nome: 'Produto 28', descricao: 'Descrição do Produto 28', preco: 94.99, imagem: 'produto28.jpg' },
    { id: 29, nome: 'Produto 29', descricao: 'Descrição do Produto 29', preco: 19.99, imagem: 'produto29.jpg' },
    { id: 30, nome: 'Produto 30', descricao: 'Descrição do Produto 30', preco: 59.99, imagem: 'produto30.jpg' }
];

// Função para renderizar os produtos
function renderizarProdutos() {
    const listaProdutos = document.querySelector('.produtos-list');
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        listaProdutos.appendChild(produtoDiv);
    });
}

// Função para adicionar produto ao carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Salvar no localStorage
    atualizarCarrinho();
}

// Função para atualizar carrinho
function atualizarCarrinho() {
    const totalItens = carrinho.length;
    document.getElementById('contador-carrinho').textContent = totalItens;
}

// Inicializar a renderização dos produtos e atualizar o carrinho
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    atualizarCarrinho();
});
