class GerenciadorContatos {
    constructor() {
      this.contatos = [];
      this.buscaEstrategia = null;
    }
  
    adicionarContato(contato) {
      this.contatos.push(contato);
      console.log(`Contato adicionado: ${contato.nome}`);
    }
  
    removerContato(nome) {
      this.contatos = this.contatos.filter(c => c.nome !== nome);
      console.log(`Contato removido: ${nome}`);
    }
  
    listarContatos() {
      console.log("Lista de contatos:");
      this.contatos.forEach(c => {
        console.log(`Nome: ${c.nome}, Telefone: ${c.telefone}, Email: ${c.email}`);
      });
    }
  
    definirEstrategiaBusca(estrategia) {
      this.buscaEstrategia = estrategia;
    }
  
    buscarContato(nome) {
      if (!this.buscaEstrategia) {
        console.log("Estratégia de busca não definida.");
        return;
      }
      const resultado = this.buscaEstrategia.buscar(this.contatos, nome);
      console.log("Resultado da busca:", resultado);
    }
  }
  
  module.exports = GerenciadorContatos;
  