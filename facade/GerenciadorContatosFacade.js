const Contato = require('../Models/Contato');
const GerenciadorContatos = require('../core/GerenciadorContatos');
const BuscaNomeExato = require('../controller/BuscaNomeExato');
const BuscaNomeParcial = require('../controller/BuscaNomeParcial');

class GerenciadorContatosFacade {
  constructor() {
    this.gerenciador = new GerenciadorContatos();
  }

  adicionarContato(nome, telefone, email) {
    const contato = new Contato(nome, telefone, email);
    this.gerenciador.adicionarContato(contato);
  }

  removerContato(nome) {
    this.gerenciador.removerContato(nome);
  }

  listarContatos() {
    this.gerenciador.listarContatos();
  }

  buscarContato(nome, tipoBusca = 'exato') {
    const estrategia = tipoBusca === 'exato' ? new BuscaNomeExato() : new BuscaNomeParcial();
    this.gerenciador.definirEstrategiaBusca(estrategia);
    this.gerenciador.buscarContato(nome);
  }
}

module.exports = GerenciadorContatosFacade;
