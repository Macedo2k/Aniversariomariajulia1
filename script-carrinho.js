// Função para carregar os produtos do carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function carregarCarrinho() {
    const listaCarrinho = document.querySelector('.produtos-list-carrinho');
    const totalItens = document.getElementById('total-itens');
    const totalPagar = document.getElementById('total-pagar');

    listaCarrinho.innerHTML = ''; // Limpa a lista de produtos no carrinho

    let total = 0;

    // Renderiza os produtos no carrinho
    carrinho.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        listaCarrinho.appendChild(produtoDiv);
        total += produto.preco;
    });

    // Atualiza os totais
    totalItens.textContent = carrinho.length;
    totalPagar.textContent = total.toFixed(2);
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o item do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    carregarCarrinho(); // Recarrega o carrinho
}

// Função de inicialização
document.addEventListener('DOMContentLoaded', carregarCarrinho);
