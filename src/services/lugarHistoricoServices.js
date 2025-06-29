const LugarRepository = require('../repository/lugarHistoricoRepository');
const { ValidadorNomeLugar, ValidadorCategoriaLugar } = require('./lugarHistoricoValidadores');

class LugarHistoricoService {
  static getNovoId(pais) {
    return LugarRepository.getMaiorId(pais) + 1;
  }

  static validarLugar(lugar) {
    const validadorNome = new ValidadorNomeLugar();
    const validadorCategoria = new ValidadorCategoriaLugar();

    validadorNome.setProximo(validadorCategoria);
    validadorNome.validar(lugar);
  }

  static criarLugar(pais, dadosLugar) {
    return {
      id: this.getNovoId(pais),
      nome: dadosLugar.nome,
      descricao: dadosLugar.descricao || '',
      categoria: dadosLugar.categoria,
    };
  }

  static adicionarLugar(pais, dadosLugar) {
    this.validarLugar(dadosLugar);

    const novoLugar = this.criarLugar(pais, dadosLugar);
    LugarRepository.adicionar(pais, novoLugar);
    return novoLugar;
  }

  static buscarLugarPorNome(nome) {
    return LugarRepository.buscarPorId(nome);
  }

  static excluirLugar(pais, idLugar) {
    LugarRepository.excluir(pais, idLugar);
  }
}

module.exports = LugarHistoricoService;
