const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const dp = [
  [1, 0],
  [0, 1],
];

// k가 1일 경우
if (n === 1) {
  console.log(dp[1].join(" "));
  return;
}

// 메모이제이션을 이용하여 k가 2 ~ n까지 a, b의 개수를 구한다.
for (let i = 2; i <= n; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}

// k가 n일 때 a, b의 갯수를 공백 단위로 반환
console.log(dp[n].join(" "));
