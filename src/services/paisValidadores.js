class Validador {
  setProximo(proximo) {
    this.proximo = proximo;
    return proximo;
  }

  validar(pais, listaDePaises) {
    if (this.proximo) {
      return this.proximo.validar(pais, listaDePaises);
    }

    return true;
  }
}

class ValidadorDeNome extends Validador {
  validar(pais, listaDePaises) {
    if (!pais.nome || pais.nome.trim() === '') {
      throw new Error('Nome do país inválido');
    }
    
    return super.validar(pais, listaDePaises);
  }
}

class ValidadorDeExistencia extends Validador {
  validar(pais, listaDePaises) {
    const existe = listaDePaises.some(
      p => p.nome.toLowerCase() === pais.nome.toLowerCase()
    );

    if (existe) {
      throw new Error('País já existe');
    }
    
    return super.validar(pais, listaDePaises);
  }
}

module.exports = {
  Validador,
  ValidadorDeNome,
  ValidadorDeExistencia,
};
