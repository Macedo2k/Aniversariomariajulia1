// Definir os 30 produtos com preços
const produtos = [
    { id: 1, nome: 'Produto 1', descricao: 'Descrição do produto encantado.', imagem: 'images/produto1.jpg', preco: 49.99 },
    { id: 2, nome: 'Produto 2', descricao: 'Descrição do produto mágico.', imagem: 'images/produto2.jpg', preco: 59.99 },
    { id: 3, nome: 'Produto 3', descricao: 'Descrição do presente encantado.', imagem: 'images/produto3.jpg', preco: 39.99 },
    { id: 4, nome: 'Produto 4', descricao: 'Descrição do produto encantado.', imagem: 'images/produto4.jpg', preco: 69.99 },
    { id: 5, nome: 'Produto 5', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto5.jpg', preco: 79.99 },
    { id: 6, nome: 'Produto 6', descricao: 'Descrição do presente encantado.', imagem: 'images/produto6.jpg', preco: 89.99 },
    { id: 7, nome: 'Produto 7', descricao: 'Descrição do produto mágico.', imagem: 'images/produto7.jpg', preco: 99.99 },
    { id: 8, nome: 'Produto 8', descricao: 'Descrição do produto encantado.', imagem: 'images/produto8.jpg', preco: 109.99 },
    { id: 9, nome: 'Produto 9', descricao: 'Descrição do presente encantado.', imagem: 'images/produto9.jpg', preco: 119.99 },
    { id: 10, nome: 'Produto 10', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto10.jpg', preco: 129.99 },
    // Adicione os outros 20 produtos...
];

// Função para exibir os produtos na página inicial
function exibirProdutos() {
    const listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = ''; // Limpa o conteúdo da lista antes de adicionar os produtos

    produtos.forEach(produto => {
        const produtoElemento = document.createElement('div');
        produtoElemento.classList.add('produto');
        produtoElemento.setAttribute('data-id', produto.id);

        produtoElemento.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button class="adicionar-carrinho">Adicionar ao Carrinho</button>
        `;

        listaProdutos.appendChild(produtoElemento);
    });

    configurarEventos();  // Configura os eventos dos botões "Adicionar ao Carrinho"
}

// Função para configurar eventos nos botões "Adicionar ao Carrinho"
function configurarEventos() {
    const botoesAdicionarCarrinho = document.querySelectorAll('.adicionar-carrinho');
    
    botoesAdicionarCarrinho.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(event) {
    const carrinho = inicializarCarrinho();
    const produto = event.target.closest('.produto');
    const produtoId = produto.getAttribute('data-id');
    const produtoNome = produto.querySelector('h3').textContent;
    const produtoImagem = produto.querySelector('img').src;
    const produtoPreco = parseFloat(produto.querySelector('.preco').textContent.replace('Preço: R
