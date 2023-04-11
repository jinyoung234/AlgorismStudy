/**
 * 날짜 계산(메모리 초과)
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

function solution(te, ts, tm) {
  let e = (s = m = 1);
  let answer = 1;
  while (e !== te || s !== ts || m !== tm) {
    answer++;
    if (++e % 16 === 0) e = 1;
    if (++s % 29 === 0) s = 1;
    if (++m % 20 === 0) m = 1;
  }
  return answer;
}

console.log(solution(a, b, c));
