const calculator = {
  plus: function(a, b) {
    return a+b;
  },
  minus: function(a,b) {
    return a-b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  remainder: function(a, b) {
    return a % b;
  },
  power: function(a, b) {
    return a ** b;
  }
}

const plus = calculator.plus(4, 5);
const minus = calculator.minus(5454, 5453234);
const multiply = calculator.multiply(123, 1234);
const divide = calculator.divide(10, 2);
const remainder = calculator.remainder(123,12);
const power = calculator.power(4, 5);

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(remainder);
console.log(power);
