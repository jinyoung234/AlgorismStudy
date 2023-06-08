/**
 * 문자열 폭발
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=e1f0b7ca1df4409987caa1ab65c4a250&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.shift();
const target = input.shift();
const stack = [];

for (let s of str) {
  stack.push(s);
  const [sLen, tLen, size] = [stack.length, target.length, target.length * -1];
  if (stack.slice(size).join("") === target) stack.splice(sLen - tLen, tLen);
}

console.log(stack.length === 0 ? "FRULA" : stack.join(""));
