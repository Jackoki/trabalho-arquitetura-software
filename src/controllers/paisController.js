const PaisService = require('../services/paisServices');

class PaisController {
  static adicionarPais(req, res) {
    try {
      const { nome, continente } = req.body;
      if (!nome || !continente) {
        return res.status(400).json({ error: 'Nome e continente são obrigatórios.' });
      }

      const novoPais = PaisService.adicionarPais(nome, continente);
      res.status(201).json(novoPais);
    } 
    
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static listarPaises(req, res) {
    try {
      const paises = PaisService.listarPaises();
      res.status(200).json(paises);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PaisController;
