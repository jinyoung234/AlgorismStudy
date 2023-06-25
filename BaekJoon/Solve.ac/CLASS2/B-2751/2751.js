let input = require('fs').readFileSync(__dirname+'/input.txt').toString().trim().split("\n").slice(1).map(i => Number(i));

input.sort((a,b) => a - b);

let str = '';

input.forEach(i => str += i + "\n");

console.log(str);
