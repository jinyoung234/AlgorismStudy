/**
 * 계단 오르기
 * (https://www.notion.so/bb5c512427e64fe4ba487ce186bc8a69)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

const scores = input.map(Number);
scores.unshift(0);

// 0, 1, 2번째 계단은 바로 초기화
const dp = [0, scores[1], scores[1] + scores[2]];

// bottom - up
for (let i = 3; i <= n; i++) {
  // 마지막 칸의 전칸을 밟는 경우 - 마지막 칸의 전전칸을 밟는 경우를 비교하여 더 큰 값을 할당
  dp[i] = Math.max(dp[i - 2] + scores[i], dp[i - 3] + scores[i - 1] + scores[i]);
}

// n번째 계단의 최댓값 출력
console.log(dp[n]);
