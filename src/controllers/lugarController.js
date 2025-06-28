const PaisService = require('../services/paisServices');
const StrategyContext = require('../strategy/contexts/context');
const OrderByName = require('../strategy/strategyOrder');
const FilterByCategory = require('../strategy/strategyFilter');
const LugarHistoricoService = require('../services/lugarHistoricoServices');

class LugarController {
  static listarLugares(req, res) {
    try {
      const { nomePais } = req.params;
      const { ordenar, categoria } = req.query; // Query params para ordenação ou filtro
      const pais = PaisService.buscarPaisPorNome(nomePais);

      if (!pais) {
        return res.status(404).json({ error: 'País não encontrado.' });
      }

      let lugares = pais.lugares;
      const contexto = new StrategyContext();

      // Aplicar ordenação
      if (ordenar === 'nome') {
        contexto.setStrategy(new OrderByName());
        lugares = contexto.execute(lugares);
      }

      // Aplicar filtro
      if (categoria) {
        contexto.setStrategy(new FilterByCategory());
        lugares = contexto.execute(lugares, categoria);
      }

      res.status(200).json(lugares);
    } 
    
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  static adicionarLugar(req, res) {
    try {
      const { nomePais } = req.params;
      const { nome, descricao, categoria } = req.body;

      if (!nome || !categoria) {
        return res.status(400).json({ error: 'Nome e categoria são obrigatórios.' });
      }

      const pais = PaisService.buscarPaisPorNome(nomePais);

      if (!pais) {
        return res.status(404).json({ error: 'País não encontrado.' });
      }

      const novoLugar = LugarHistoricoService.adicionarLugar(pais, { nome, descricao, categoria });
      res.status(201).json(novoLugar);
    } 
    
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = LugarController;
