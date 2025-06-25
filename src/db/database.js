const database = {
  paises: [
    {
      id: 1,
      nome: 'Brasil',
      continente: 'América',
      lugares: [
        {
          id: 1,
          nome: 'Cristo Redentor',
          descricao: 'Estátua icônica no Rio de Janeiro',
          categoria: 'Monumento'
        },
        {
          id: 2,
          nome: 'Parque Nacional da Tijuca',
          descricao: 'Parque florestal urbano',
          categoria: 'Arqueológico'
        },
      ],
    },

    
    {
      id: 2,
      nome: 'Egito',
      continente: 'África',
      lugares: [
        {
          id: 1,
          nome: 'Pirâmides de Gizé',
          descricao: 'Conjunto de pirâmides antigas',
          categoria: 'Monumento'
        },
      ],
    },
  ],
};

module.exports = database;
