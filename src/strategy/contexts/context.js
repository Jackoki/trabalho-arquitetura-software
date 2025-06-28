class StrategyContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  execute(list, parameter = null) {
    if (this.strategy.order) {
      return this.strategy.order(list);
    }

    if (this.strategy.filter) {
      return this.strategy.filter(list, parameter);
    }

    throw new Error('Estratégia inválida.');
  }
}

module.exports = StrategyContext;
