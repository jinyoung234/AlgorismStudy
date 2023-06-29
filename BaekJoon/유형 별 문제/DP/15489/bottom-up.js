const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c, w] = input.shift().split(" ").map(Number);

// 메모이제이션 배열 생성
const dp = Array.from(Array(31), () => Array(31).fill(0));

// bottom-up 방식으로 dp 배열에 파스칼의 삼각형 모양대로 값을 채운다.
for (let i = 0; i < dp.length; i++) {
  dp[i][0] = 1;
}

for (let i = 1; i < dp.length; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

// r번째 row의 c번째 col 부터 높이가 w인 파스칼의 삼각형 값의 합을 구한다.
let p = c - 1;
let sum = 0;
for (let i = r - 1; i < r + w - 1; i++) {
  for (let j = c - 1; j <= p; j++) {
    sum += dp[i][j];
  }
  p++;
}

console.log(sum);
