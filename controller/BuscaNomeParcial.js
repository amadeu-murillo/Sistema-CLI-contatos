const BuscaEstrategia = require('./BuscaEstrategia');

class BuscaNomeParcial extends BuscaEstrategia {
  buscar(contatos, nome) {
    return contatos.filter(contato => contato.nome.includes(nome));
  }
}

module.exports = BuscaNomeParcial;
