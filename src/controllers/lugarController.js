const Facade = require('../facade/facade');

class LugarController {
  static listarLugares(req, res) {
    try {
      const { nomePais } = req.params;
      const { ordenar, categoria } = req.query;

      const lugares = Facade.listarLugaresComFiltro(nomePais, ordenar, categoria);
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

      const novoLugar = Facade.adicionarLugar(nomePais, { nome, descricao, categoria });
      res.status(201).json(novoLugar);
    } 
    
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = LugarController;
