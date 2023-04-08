/**
 * ATM
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(n, times) {
  let personPerTime = [];
  let sum = 0;
  times.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    sum += times[i];
    personPerTime.push(sum);
  }
  return personPerTime.reduce((a, b) => a + b, 0);
}

console.log(solution(Number(input[0]), input[1].split(" ").map(Number)));
