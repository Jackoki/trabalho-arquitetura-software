class StrategyOrder {
  order(list) {
    throw new Error('Método order() deve ser implementado.');
  }
}

class StrategyFilter {
  filter(list, parameter) {
    throw new Error('Método filter() deve ser implementado.');
  }
}

module.exports = { StrategyOrder, StrategyFilter };
