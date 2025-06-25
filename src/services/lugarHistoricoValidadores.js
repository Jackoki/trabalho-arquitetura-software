class ValidadorLugar {
  setProximo(proximo) {
    this.proximo = proximo;
    return proximo;
  }

  validar(lugar) {
    if (this.proximo) {
      return this.proximo.validar(lugar);
    }
    return true;
  }
}

class ValidadorNomeLugar extends ValidadorLugar {
  validar(lugar) {
    if (!lugar.nome || lugar.nome.trim() === '') {
      throw new Error('Nome do lugar inválido');
    }
    return super.validar(lugar);
  }
}

class ValidadorCategoriaLugar extends ValidadorLugar {
  validar(lugar) {
    const categoriasValidas = ['Monumento', 'Religioso', 'Arqueológico'];
    if (!categoriasValidas.includes(lugar.categoria)) {
      throw new Error('Categoria inválida');
    }
    return super.validar(lugar);
  }
}

module.exports = {
  ValidadorLugar,
  ValidadorNomeLugar,
  ValidadorCategoriaLugar,
};
