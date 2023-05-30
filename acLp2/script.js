const readline = require("readline");

class Produto {
  // código da classe Produto omitido para brevidade

  exibirInformacoes() {
    console.log("Produto cadastrado!!!");
    console.log("Venda 1");
    console.log("Produto:", this.descricao);
    console.log("Descrição:", this.descricao);
    console.log("Estoque atual:", this.estoque);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Tela 1
console.log("BellaVida Cosméticos");
console.log("Realce sua beleza, viva sua melhor versão!");
rl.question("Deseja fazer compras? (sim ou não): ", (resposta) => {
  if (resposta.toLowerCase() === "sim") {
    rl.question("Digite a descrição do produto: ", (descricaoProduto) => {
      rl.question("Digite o preço unitário do produto: ", (precoProduto) => {
        precoProduto = parseFloat(precoProduto);

        // Criação do objeto Produto
        const produto = new Produto(
          1,
          descricaoProduto,
          true,
          10,
          precoProduto,
          "atributo1",
          "atributo2"
        );

        produto.exibirInformacoes();

        console.log("===========================");
        console.log("Vendas do Produto");
        console.log("===========================");

        const realizarVenda = (venda) => {
          console.log(`Venda ${venda}`);
          console.log("Produto:", produto.descricao);
          console.log("Descrição:", produto.descricao);
          console.log("Estoque atual:", produto.estoque);

          rl.question("Quantos produtos deseja comprar? ", (quantidadeCompra) => {
            quantidadeCompra = parseInt(quantidadeCompra);
            const valorTotal = quantidadeCompra * produto.preco;

            console.log("Valor a pagar:", valorTotal);

            produto.retirarEstoque(quantidadeCompra);

            console.log("Saldo atual do estoque:", produto.estoque);
            console.log("===========================");

            if (venda < 5) {
              realizarVenda(venda + 1);
            } else {
              console.log("===========================");
              console.log("Reposição de Estoque");
              console.log("===========================");

              const estoqueFinal = 10 - produto.estoque;
              console.log("Quantidade a ser incluída no estoque:", estoqueFinal);

              produto.incluirEstoque(estoqueFinal);

              console.log("Estoque final:", produto.estoque);
              rl.close();
            }
          });
        };

        realizarVenda(1);
      });
    });
  } else {
    console.log("Obrigado pela visita! Volte sempre.");
    rl.close();
  }
});