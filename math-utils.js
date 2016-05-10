var _ = require('lodash');

function weightedAverage(marks, weights) {
  var squares = _.map(marks, function(mark, index) {
    return mark * weights[index];
  });
  var weightedAvg = _.reduce(squares, function(previous, current) {
    return previous + current;
  });
  return weightedAvg / _.reduce(weights, function(previous, current) {
    return previous + current;
  });
}

module.exports = {
  weightedAverage: weightedAverage
};
