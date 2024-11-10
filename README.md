Sistema de Gerenciamento de Contatos


Visão Geral
Este sistema em JavaScript é um gerenciador de contatos CLI (Command Line Interface), 
onde os usuários podem adicionar, remover, listar e buscar contatos. 
Utiliza os padrões de projeto Facade e Strategy para modularizar a lógica do sistema e facilitar futuras extensões e modificações.

#Estrutura do Projeto
A estrutura do projeto é organizada em módulos:

- models/
  - Contato.js
- core/
  - GerenciadorContatos.js
- controller/
  - BuscaEstrategia.js
  - BuscaNomeExato.js
  - BuscaNomeParcial.js
- facade/
  - GerenciadorContatosFacade.js
- cli.js

Arquivo models/Contato.js
Classe Contato
Representa um contato individual no sistema.

Atributos
nome: string - O nome do contato.
telefone: string - O número de telefone do contato.
email: string - O endereço de email do contato.

Arquivo core/GerenciadorContatos.js
Classe GerenciadorContatos
Classe principal que gerencia a lista de contatos e utiliza o padrão Strategy para a busca.

Métodos
adicionarContato(contato: Contato): Adiciona um contato à lista.
removerContato(nome: string): Remove o contato pelo nome.
listarContatos(): Exibe todos os contatos na lista.
definirEstrategiaBusca(estrategia: BuscaEstrategia): Define a estratégia de busca que será usada pelo método buscarContato.
buscarContato(nome: string): Executa a busca com a estratégia definida.

Arquivo controller/BuscaEstrategia.js
Classe BuscaEstrategia
Interface para estratégias de busca. Define o método buscar, que deve ser implementado pelas subclasses.

Métodos
buscar(contatos: Array<Contato>, nome: string): Método abstrato que realiza a busca em uma lista de contatos. Deve ser implementado nas subclasses.

Arquivo controller/BuscaNomeExato.js
Classe BuscaNomeExato
Implementa uma busca exata de contatos, onde o nome deve corresponder exatamente ao termo buscado.

Arquivo controller/BuscaNomeParcial.js
Classe BuscaNomeParcial
Implementa uma busca parcial, onde o nome pode conter o termo buscado em qualquer parte da string.

Arquivo facade/GerenciadorContatosFacade.js
Classe GerenciadorContatosFacade
A classe GerenciadorContatosFacade atua como uma interface simplificada para GerenciadorContatos. Esse Facade permite a adição, remoção, listagem e busca de contatos sem que o usuário precise conhecer os detalhes internos de GerenciadorContatos.

Métodos
adicionarContato(nome: string, telefone: string, email: string): Adiciona um novo contato ao sistema.
removerContato(nome: string): Remove um contato pelo nome.
listarContatos(): Lista todos os contatos.
buscarContato(nome: string, tipoBusca: string): Busca contatos pelo nome. O parâmetro tipoBusca pode ser 'exato' para busca exata ou 'parcial' para busca parcial.

Arquivo cli.js
CLI - Interface de Linha de Comando
A interface de linha de comando permite que os usuários interajam com o sistema. A CLI utiliza o GerenciadorContatosFacade para expor as funcionalidades de gerenciamento de contatos.
Instalar caso não tenha:
  npm install prompt-sync
Exemplo de uso:
  node cli.js

Comandos Disponíveis
Adicionar Contato: Insere um novo contato no sistema.
Remover Contato: Remove um contato existente pelo nome.
Listar Contatos: Exibe todos os contatos armazenados.
Buscar Contato: Permite buscar contatos por nome, com busca exata ou parcial.
Sair: Encerra a aplicação.
Exemplo de Uso
Execute node cli.js no terminal e escolha uma das opções para interagir com o sistema.

Considerações Finais
Esta implementação modular e extensível permite que novas estratégias de busca ou funcionalidades de gerenciamento de contatos sejam adicionadas facilmente.
