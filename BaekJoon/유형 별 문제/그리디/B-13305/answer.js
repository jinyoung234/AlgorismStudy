/**
 * 주유소
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 숫자의 값이 매우 클 땐 Number 대신 BigInt 활용하기
let load = a.split(" ").map(BigInt);
let price = b.split(" ").map(BigInt);

function solution(load, price) {
  // BigInt 사용 시 정수가 아닌 정수+n의 형태로 사용
  let expense = 0n;
  let min = price[0];
  for (let i = 0; i < n - 1; i++) {
    if (price[i] <= min) {
      min = price[i];
    }
    expense += min * load[i];
  }
  // 리턴 시 String으로 감싸 리턴
  return String(expense);
}

console.log(solution(load, price));
