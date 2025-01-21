const produtos = [];
for (let i = 1; i <= 30; i++) {
    produtos.push({
        id: i,
        nome: `Produto ${i}`,
        descricao: `Descrição do Produto ${i} encantado.`,
        imagem: `images/produto${i}.jpg`,
    });
}

const numeroItensCarrinho = document.querySelector('.numero-itens');
const listaProdutosElement = document.querySelector('#produtos');

let carrinho = [];

function atualizarCarrinho() {
    numeroItensCarrinho.textContent = carrinho.length;
}

function adicionarAoCarrinho(id) {
    carrinho.push(id);
    atualizarCarrinho();
}

function renderizarProdutos() {
    listaProdutosElement.innerHTML = '';
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.dataset.id = produto.id;

        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <button class="adicionar-carrinho">Adicionar ao Carrinho</button>
        `;

        divProduto.querySelector('.adicionar-carrinho').addEventListener('click', () => adicionarAoCarrinho(produto.id));

        listaProdutosElement.appendChild(divProduto);
    });
}

renderizarProdutos();
