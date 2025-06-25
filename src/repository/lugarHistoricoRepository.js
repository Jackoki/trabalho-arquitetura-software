class LugarHistoricoRepository {
  static listar(pais) {
    return pais.lugares || [];
  }

  static buscarPorNome(nome) {
    for (const pais of database.paises) {
      const lugar = (pais.lugares || []).find(
        l => l.nome.toLowerCase() === nome.toLowerCase()
      );

      if (lugar) {
        return lugar;
      }
    }

    return null;
  }

  static adicionar(pais, lugar) {
    if (!pais.lugares) {
      pais.lugares = [];
    }
    
    pais.lugares.push(lugar);
  }

  static excluir(pais, idLugar) {
    const index = (pais.lugares || []).findIndex(l => l.id === idLugar);

    if (index === -1) {
        throw new Error('Lugar histórico não encontrado');
    }
    
    pais.lugares.splice(index, 1);
  }

  static getMaiorId(pais) {
    if (!pais.lugares || pais.lugares.length === 0) {
        return 0;
    }

    return Math.max(...pais.lugares.map(l => l.id));
  }
}

module.exports = LugarHistoricoRepository;
