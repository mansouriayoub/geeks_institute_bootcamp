
const lodash = require('lodash');

const { add, multiply } = require('./math.js')

const addTwos = add(2, 1)

const multiplyTwos = multiply(2, 2);

const rnd = lodash.round(8);
console.log(rnd);

console.log(addTwos);
console.log(multiplyTwos);