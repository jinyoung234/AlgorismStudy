/**
 * 1로 만들기
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());

const dp = [0, 0];

const max = Number.MAX_SAFE_INTEGER;

// 값이 나누어 떨어지면(i라고 할 때,) dp 배열의 i번째 요소 값 + 1을 반환
// 아니라면 최소값 비교를 하지 않기 위해 max를 반환
const calculateDivisorCount = (a, b) => {
  return a % b === 0 ? dp[a / b] + 1 : max;
};

// bottom - up
for (let i = 2; i <= n; i++) {
  // i번째 dp 배열에는 3으로 나누었을 때, 2로 나누었을 때, 1을 뺏을 때 가장 최솟값을 추가
  dp[i] = Math.min(calculateDivisorCount(i, 3), calculateDivisorCount(i, 2), dp[i - 1] + 1);
}

// dp 배열의 n번째 값을 반환
console.log(dp[n]);
