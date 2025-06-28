const { StrategyOrder } = require('./strategyInterface');

class OrderByName extends StrategyOrder {
  order(list) {
    return list.sort((a, b) => a.nome.localeCompare(b.nome));
  }
}

module.exports = OrderByName;
