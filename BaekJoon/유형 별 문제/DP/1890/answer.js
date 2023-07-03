/**
 * 점프
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=f7877b08d8614a11bf4389ce868279e7&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

const board = input.map((s) => s.split(" ").map(Number));

// 초기 dp 배열을 0으로 초기화
const dp = Array.from(Array(n), () => Array(n).fill(BigInt(0)));

// 가장 위쪽에서 왼쪽 좌표를 1로 초기화
dp[0][0] = 1;

// dp 배열을 순회하며 갈 수 있는 모든 경로에 대한 가짓수를 기록
for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    if (dp[row][col] === 0n || (row === n - 1 && col === n - 1)) continue;
    // board로 부터 갈 수 있는 거리를 받아온다.
    const jump = board[row][col];
    // nx, ny 와 같은 원리로 기존 위치에서 jump만큼 row와 col이 이동
    const [nr, nc] = [row + jump, col + jump];
    // 만약 이동할 nr, nc 좌표가 n을 벗어나지 않으면 그 좌표 만큼 이동하여 이전 경로에 있던 갈 수 있는 가짓수를 추가
    if (nr < n) dp[nr][col] += BigInt(dp[row][col]);
    if (nc < n) dp[row][nc] += BigInt(dp[row][col]);
  }
}

// 가장 아래에서 오른쪽에 있는 경로로 갈 수 있는 가짓수를 출력
console.log(dp[n - 1][n - 1].toString());
