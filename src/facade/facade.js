const PaisService = require('../services/paisServices');
const LugarHistoricoService = require('../services/lugarHistoricoServices');
const StrategyContext = require('../strategy/contexts/context');
const OrderByName = require('../strategy/strategyOrder');
const FilterByCategory = require('../strategy/strategyFilter');

class Facade {
  static listarLugaresComFiltro(nomePais, ordenar, categoria) {
    const pais = PaisService.buscarPaisPorNome(nomePais);
    if (!pais) {
      throw new Error('País não encontrado.');
    }

    let lugares = pais.lugares;
    const contexto = new StrategyContext();

    if (ordenar === 'nome') {
      contexto.setStrategy(new OrderByName());
      lugares = contexto.execute(lugares);
    }

    if (categoria) {
      contexto.setStrategy(new FilterByCategory());
      lugares = contexto.execute(lugares, categoria);
    }

    return lugares;
  }

  static adicionarLugar(nomePais, dadosLugar) {
    const pais = PaisService.buscarPaisPorNome(nomePais);
    if (!pais) {
      throw new Error('País não encontrado.');
    }

    return LugarHistoricoService.adicionarLugar(pais, dadosLugar);
  }

  static adicionarPais(nome, continente) {
    return PaisService.adicionarPais(nome, continente);
  }

  static listarPaises() {
    return PaisService.listarPaises();
  }
}

module.exports = Facade;
