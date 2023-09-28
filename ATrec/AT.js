class Produto {
    constructor(cod, descricao, valor, estoque) {
      this.cod = cod;
      this.descricao = descricao;
      this.valor = valor;
      this.estoque = estoque;
    }
  }
  
  class Cliente {
    constructor(numero, nome, email) {
      this.numero = numero;
      this.nome = nome;
      this.email = email;
    }
  }
  
  const produtos = [];
  const clientes = [];
  
  function cadastrarProduto() {
    const cod = prompt('Digite o código do produto:');
    const descricao = prompt('Digite a descrição do produto:');
    const valor = parseFloat(prompt('Digite o valor do produto:'));
    const estoque = parseInt(prompt('Digite o estoque do produto:'));
  
    const produto = new Produto(cod, descricao, valor, estoque);
    produtos.push(produto);
    console.log('Produto cadastrado com sucesso!');
  }
  
  function cadastrarCliente() {
    const numero = prompt('Digite o número do cliente:');
    const nome = prompt('Digite o nome do cliente:');
    const email = prompt('Digite o email do cliente:');
  
    const cliente = new Cliente(numero, nome, email);
    clientes.push(cliente);
    console.log('Cliente cadastrado com sucesso!');
  }
  
  function listarProdutos() {
    console.log('Lista de Produtos:');
    produtos.forEach((produto) => {
      console.log(`Código: ${produto.cod}, Descrição: ${produto.descricao}, Valor: ${produto.valor}, Estoque: ${produto.estoque}`);
    });
  }
  
  function listarClientes() {
    console.log('Lista de Clientes:');
    clientes.forEach((cliente) => {
      console.log(`Número: ${cliente.numero}, Nome: ${cliente.nome}, Email: ${cliente.email}`);
    });
  }
  
  function menuPrincipal() {
    let opcao;
    do {
      console.log('======= Menu Principal =======');
      console.log('1 - Cadastrar Produto');
      console.log('2 - Cadastrar Cliente');
      console.log('3 - Listar Produtos');
      console.log('4 - Listar Clientes');
      console.log('5 - Sair');
      opcao = prompt('Digite a opção desejada:');
      switch (opcao) {
        case '1':
          cadastrarProduto();
          break;
        case '2':
          cadastrarCliente();
          break;
        case '3':
          listarProdutos();
          break;
        case '4':
          listarClientes();
          break;
        case '5':
          console.log('Saindo do programa.');
          break;
        default:
          console.log('Opção inválida. Tente novamente.');
      }
    } while (opcao !== '5');
  }
  
  menuPrincipal();