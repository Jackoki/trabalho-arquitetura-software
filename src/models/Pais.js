class Pais {
  constructor(id, nome, continente) {
    this.id = id;
    this.nome = nome;
    this.continente = continente;
    this.lugares = [];
  }

  adicionarLugar(lugar) {
    this.lugares.push(lugar);
  }
}

module.exports = Pais;
