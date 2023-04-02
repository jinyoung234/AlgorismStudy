const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...tips] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(n, tips) {
  let answer = 0;
  tips.sort((a, b) => b - a);
  for (let i = 0; i < n; i++) {
    let tip = tips[i] - i;
    if (tip > 0) answer += tip;
  }
  return answer;
}

console.log(solution(n, tips));
