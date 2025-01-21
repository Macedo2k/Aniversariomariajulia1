// Definir os 30 produtos
const produtos = [
    { id: 1, nome: 'Produto 1', descricao: 'Descrição do produto encantado.', imagem: 'images/produto1.jpg' },
    { id: 2, nome: 'Produto 2', descricao: 'Descrição do produto mágico.', imagem: 'images/produto2.jpg' },
    { id: 3, nome: 'Produto 3', descricao: 'Descrição do presente encantado.', imagem: 'images/produto3.jpg' },
    { id: 4, nome: 'Produto 4', descricao: 'Descrição do produto encantado.', imagem: 'images/produto4.jpg' },
    { id: 5, nome: 'Produto 5', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto5.jpg' },
    { id: 6, nome: 'Produto 6', descricao: 'Descrição do presente encantado.', imagem: 'images/produto6.jpg' },
    { id: 7, nome: 'Produto 7', descricao: 'Descrição do produto mágico.', imagem: 'images/produto7.jpg' },
    { id: 8, nome: 'Produto 8', descricao: 'Descrição do produto encantado.', imagem: 'images/produto8.jpg' },
    { id: 9, nome: 'Produto 9', descricao: 'Descrição do presente encantado.', imagem: 'images/produto9.jpg' },
    { id: 10, nome: 'Produto 10', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto10.jpg' },
    { id: 11, nome: 'Produto 11', descricao: 'Descrição do produto encantado.', imagem: 'images/produto11.jpg' },
    { id: 12, nome: 'Produto 12', descricao: 'Descrição do produto mágico.', imagem: 'images/produto12.jpg' },
    { id: 13, nome: 'Produto 13', descricao: 'Descrição do presente encantado.', imagem: 'images/produto13.jpg' },
    { id: 14, nome: 'Produto 14', descricao: 'Descrição do produto encantado.', imagem: 'images/produto14.jpg' },
    { id: 15, nome: 'Produto 15', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto15.jpg' },
    { id: 16, nome: 'Produto 16', descricao: 'Descrição do produto mágico.', imagem: 'images/produto16.jpg' },
    { id: 17, nome: 'Produto 17', descricao: 'Descrição do produto encantado.', imagem: 'images/produto17.jpg' },
    { id: 18, nome: 'Produto 18', descricao: 'Descrição do presente encantado.', imagem: 'images/produto18.jpg' },
    { id: 19, nome: 'Produto 19', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto19.jpg' },
    { id: 20, nome: 'Produto 20', descricao: 'Descrição do produto mágico.', imagem: 'images/produto20.jpg' },
    { id: 21, nome: 'Produto 21', descricao: 'Descrição do produto encantado.', imagem: 'images/produto21.jpg' },
    { id: 22, nome: 'Produto 22', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto22.jpg' },
    { id: 23, nome: 'Produto 23', descricao: 'Descrição do produto mágico.', imagem: 'images/produto23.jpg' },
    { id: 24, nome: 'Produto 24', descricao: 'Descrição do presente encantado.', imagem: 'images/produto24.jpg' },
    { id: 25, nome: 'Produto 25', descricao: 'Descrição do produto encantado.', imagem: 'images/produto25.jpg' },
    { id: 26, nome: 'Produto 26', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto26.jpg' },
    { id: 27, nome: 'Produto 27', descricao: 'Descrição do produto mágico.', imagem: 'images/produto27.jpg' },
    { id: 28, nome: 'Produto 28', descricao: 'Descrição do presente encantado.', imagem: 'images/produto28.jpg' },
    { id: 29, nome: 'Produto 29', descricao: 'Descrição do produto encantado.', imagem: 'images/produto29.jpg' },
    { id: 30, nome: 'Produto 30', descricao: 'Descrição do produto maravilhoso.', imagem: 'images/produto30.jpg' }
];

// Função para exibir os produtos na página inicial
function exibirProdutos() {
    const listaProdutos = document.querySelector('.lista-produtos');
    listaProdutos.innerHTML = ''; // Limpa o conteúdo da lista antes de adicionar os produtos

    // Para exibir os produtos em 4 por linha, adicionamos uma classe 'produto-linha' para controlar a largura
    produtos.forEach(produto => {
        const produtoElemento = document.createElement('div');
        produtoElemento.classList.add('produto');
        produtoElemento.setAttribute('data-id', produto.id);

        produtoElemento.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <button class="adicionar-carrinho">Adicionar ao Carrinho</button>
        `;

        listaProdutos.appendChild(produtoElemento);
    });

    configurarEventos();  // Configura os eventos do botão "Adicionar ao Carrinho"
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

    const produtoExistente = carrinho.find(item => item.id === produtoId);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({
            id: produtoId,
            nome: produtoNome,
            imagem: produtoImagem,
            quantidade: 1
        });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();  // Atualiza o número de itens no carrinho
}

// Função para inicializar o carrinho
function inicializarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (!carrinho) {
        carrinho = [];
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    return carrinho;
}

// Função para atualizar a quantidade de itens no carrinho
function atualizarCarrinho() {
    const carrinho = inicializarCarrinho();
    const numeroItens = carrinho.reduce((total, item) => total + item.quantidade, 0);  // Conta a quantidade de todos os itens
    document.querySelector('.numero-itens').textContent = numeroItens;
}

// Inicializa a página com os produtos
document.addEventListener('DOMContentLoaded', () => {
    exibirProdutos();  // Exibe os produtos quando a página é carregada
    atualizarCarrinho();  // Atualiza o número de itens no carrinho
});
