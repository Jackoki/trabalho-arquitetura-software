const PaisRepository = require('../repository/paisRepository');
const { ValidadorDeNome, ValidadorDeExistencia } = require('./paisValidadores');

class PaisService {
  static getNovoId() {
    return PaisRepository.getMaiorId() + 1;
  }

  static validarPais(pais) {
    const validadorNome = new ValidadorDeNome();
    const validadorExistencia = new ValidadorDeExistencia();

    validadorNome.setProximo(validadorExistencia);
    validadorNome.validar(pais, PaisRepository.listar());
  }

  static criarPais(nome, continente) {
    return {
      id: this.getNovoId(),
      nome,
      continente,
      lugares: [],
    };
  }

  static adicionarPais(nome, continente) {
    const novoPais = this.criarPais(nome, continente);
    this.validarPais(novoPais);
    PaisRepository.adicionar(novoPais);
    return novoPais;
  }

  static listarPaises() {
    return PaisRepository.listar();
  }

  static buscarPaisPorNome(nome) {
    return PaisRepository.buscarPaisPorNome(nome);
  }

  static excluirPais(id) {
    PaisRepository.excluir(id);
  }
}

module.exports = PaisService;
