/**
 * 연산자 끼워넣기
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=36e1db54f01c479f9e3b889adaed2a72&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const numbers = input.shift().split(" ").map(Number);
const operators = input.shift().split(" ").map(Number);

const OPERATOR_TABLE = ["+", "-", "*", "/"];

function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return a >= 0 ? Math.floor(a / b) : Math.ceil(a / b);
}

let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];

function dfs(l, result) {
  if (l === n - 1) {
    min = Math.min(min, result);
    max = Math.max(max, result);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      operators[i]--;
      dfs(l + 1, calculate(result, numbers[l + 1], OPERATOR_TABLE[i]));
      operators[i]++;
    }
  }
}

dfs(0, numbers[0]);

console.log(`${max} ${min}`);
