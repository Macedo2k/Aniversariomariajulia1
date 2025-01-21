let numeroItens = 0;

function atualizarCarrinho() {
    document.querySelector(".numero-itens").textContent = numeroItens;
}

function adicionarCarrinho() {
    numeroItens++;
    atualizarCarrinho();
    alert("Produto adicionado ao carrinho!");
}

// Atribuir o evento de clique a todos os botões "Adicionar ao Carrinho"
document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', adicionarCarrinho);
});
