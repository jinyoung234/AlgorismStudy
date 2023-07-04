/**
 * RGB 거리
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=c5ee5881484148dc9587f0547fad953d&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

const costs = input.map((line) => line.split(" ").map(Number));

// costs와 유사한 2차원 배열 형태의 dp 배열을 생성
const dp = Array.from({ length: n }, () => Array(3).fill(0));

// 초기값 설정
dp[0] = [costs[0][0], costs[0][1], costs[0][2]];

// 1 ~ n열에 대해 순회하며 i열의 0행, 1행, 2행에 대한 최소 비용을 구한다.
for (let i = 1; i < n; i++) {
  // 각 행의 최소 비용 = 자신의 행을 제외한 이전 행 중의 최솟값 + 현재 자신의 행의 비용
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
}

// n열에서 가장 최소 비용을 구한다.
const answer = Math.min(...dp[n - 1]);

// 최소 비용을 반환한다.
console.log(answer);
