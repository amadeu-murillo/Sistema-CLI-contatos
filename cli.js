const prompt = require('prompt-sync')({sigint: true});
const GerenciadorContatosFacade = require('./facade/GerenciadorContatosFacade');

const sistema = new GerenciadorContatosFacade();

function exibirMenu() {
  console.log("\nGerenciador de Contatos:");
  console.log("1. Adicionar Contato");
  console.log("2. Remover Contato");
  console.log("3. Listar Contatos");
  console.log("4. Buscar Contato");
  console.log("5. Sair");
}

function iniciarCLI() {
  let opcao;
  do {
    exibirMenu();
    opcao = prompt("Escolha uma opção: ");
    
    switch (opcao) {
      case '1':
        const nome = prompt("Nome: ");
        const telefone = prompt("Telefone: ");
        const email = prompt("Email: ");
        sistema.adicionarContato(nome, telefone, email);
        break;
      case '2':
        const nomeRemover = prompt("Nome do contato a remover: ");
        sistema.removerContato(nomeRemover);
        break;
      case '3':
        sistema.listarContatos();
        break;
      case '4':
        const nomeBuscar = prompt("Nome do contato a buscar: ");
        const tipoBusca = prompt("Tipo de busca (exato ou parcial): ");
        sistema.buscarContato(nomeBuscar, tipoBusca);
        break;
      case '5':
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida.");
    }
  } while (opcao !== '5');
}

iniciarCLI();
