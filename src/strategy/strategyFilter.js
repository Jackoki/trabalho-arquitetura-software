const { StrategyFilter } = require('./strategyInterface');

class FilterByCategory extends StrategyFilter {
  filter(list, category) {
    return list.filter((lugar) => lugar.categoria === category);
  }
}

module.exports = FilterByCategory;
