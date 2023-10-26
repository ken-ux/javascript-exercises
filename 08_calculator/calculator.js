const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (arr) {
  return arr.reduce((sum, item) => (sum += item), 0);
};

const multiply = function (arr) {
  return arr.reduce((product, item) => (product *= item));
};

const power = function (base, power) {
  return Math.pow(base, power);
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
