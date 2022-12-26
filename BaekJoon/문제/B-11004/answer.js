const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map((i) => Number(i));

let array = input[1].split(" ").map((i) => Number(i));

array.sort((a, b) => a - b);

console.log(array[k - 1]);
