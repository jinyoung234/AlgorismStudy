/**
 * 에라토스테네스의 체
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ").map(Number);

const printKthDeleteNumbers = (n, k) => {
  const numbers = [];
  let count = 0;
  for (let i = 2; i <= n; i++) {
    numbers[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (numbers[i] === 0) continue;
    for (let j = i; j <= n; j += i) {
      if (numbers[j] === 0) continue;
      count++;
      if (count === k) {
        console.log(j);
      }
      numbers[j] = 0;
    }
  }
};

printKthDeleteNumbers(n, k);
