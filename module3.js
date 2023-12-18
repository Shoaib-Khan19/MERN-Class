//Import first way
const run = require('./module.js');
// const run = require('./module2.js');

console.log(run.addThreeNumber(20,32,22));


// Import Second Way
const {areaOfCircle,areaOfSquare,areaOfTriangle} = require('./module2.js');

console.log(areaOfCircle(12));
// result = run.subThreeNumber(23,43,23);
// result = run.mulThreeNumber(23,43,23);

