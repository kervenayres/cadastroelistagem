document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("produto-form");
    const listaProdutos = document.getElementById("lista-produtos");
    const produtos = [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const disponivel = document.querySelector('input[name="disponivel"]:checked').value;

        const novoProduto = { nome, valor, disponivel };

        produtos.push(novoProduto);

        produtos.sort((a, b) => a.valor - b.valor);

        listaProdutos.innerHTML = "";

        produtos.forEach(produto => {
            const listItem = document.createElement("li");
            const disponibilidade = produto.disponivel === 'sim' ? 'Disponível' : 'Indisponível';
            listItem.textContent = `${produto.nome} - R$${produto.valor.toFixed(2)} - ${disponibilidade}`;
            listaProdutos.appendChild(listItem);
        });

        form.reset();
    });
});
