const database = require('../db/database');

class PaisRepository {
  static listar() {
    return database.paises;
  }

  static buscarPorId(id) {
    return database.paises.find(p => p.id === id);
  }

  static adicionar(pais) {
    database.paises.push(pais);
  }

  static excluir(id) {
    const index = database.paises.findIndex(p => p.id === id);

    if (index === -1) {
        throw new Error('País não encontrado');
    }

    database.paises.splice(index, 1);
  }

  static getMaiorId() {
    if (database.paises.length === 0) {
        return 0;
    }

    return Math.max(...database.paises.map(p => p.id));
  }

  static buscarPaisPorNome(nome) {
    return database.paises.find(
      p => p.nome.toLowerCase() === nome.toLowerCase()
    );
  }
}

module.exports = PaisRepository;
