const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c, w] = input.shift().split(" ").map(Number);

// 메모이제이션 배열 생성
const dp = Array.from(Array(31), () => Array(31).fill(0));

// top-down 방식으로 dp 배열에 파스칼의 삼각형 모양대로 값을 채운다.
const recursion = (n, r) => {
  if (n === r || r === 0) {
    dp[n][r] = 1;
    return 1;
  }
  if (dp[n][r] > 0) return dp[n][r];
  else return (dp[n][r] = recursion(n - 1, r - 1) + recursion(n - 1, r));
};

for (let i = 0; i <= 29; i++) {
  for (let j = 0; j <= 29; j++) {
    if (i < j) break;
    dfs(i, j);
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
