const BuscaEstrategia = require('./BuscaEstrategia');

class BuscaNomeExato extends BuscaEstrategia {
  buscar(contatos, nome) {
    return contatos.filter(contato => contato.nome === nome);
  }
}

module.exports = BuscaNomeExato;
