// Dados dos vetores
const CODIGO = ["COD01", "COD02", "COD03"];
const SERVICO = ["ENTREGA DE CACHORRO DOADO", "BUSCA DE GATO PERDIDO", "BUSCA DE CACHORRO PERDIDO"];
const VALORUNITARIODOACAO = [10.00, 20.00, 25.50];
let MOVIMENTO = [0, 0, 0];

// Função para exibir os dados
function exibirDados() {
  console.log("------ Serviços Disponíveis ------");
  for (let i = 0; i < CODIGO.length; i++) {
    console.log(`Código: ${CODIGO[i]}, Serviço: ${SERVICO[i]}, Valor: R$${VALORUNITARIODOACAO[i].toFixed(2)}`);
  }
  console.log("---------------------------------");
}

// Função para adicionar serviço ao carrinho
function adicionarAoCarrinho(codigo) {
  const index = CODIGO.indexOf(codigo);
  if (index !== -1 && MOVIMENTO.indexOf(index) === -1) {
    const carrinhoIndex = MOVIMENTO.indexOf(0);
    if (carrinhoIndex !== -1) {
      MOVIMENTO[carrinhoIndex] = index;
      console.log(`Serviço "${SERVICO[index]}" adicionado ao carrinho.`);
    } else {
      console.log("Carrinho cheio. Finalize o carrinho antes de adicionar mais serviços.");
    }
  } else {
    console.log("Código de serviço inválido ou já adicionado.");
  }
}

// Função para calcular valor total e fechar doação
function calcularTotalDoacao() {
  let total = 0;
  for (const index of MOVIMENTO) {
    if (index !== 0) {
      total += VALORUNITARIODOACAO[index];
    }
  }
  console.log(`Total da doação: R$${total.toFixed(2)}`);
  MOVIMENTO = [0, 0, 0]; // Reiniciar o carrinho
}

// Loop principal
while (true) {
  exibirDados();
  const codigo = prompt("Informe o código do serviço desejado (ou 'F' para finalizar):");
  if (codigo.toUpperCase() === "F") {
    calcularTotalDoacao();
  } else {
    adicionarAoCarrinho(codigo);
  }
}