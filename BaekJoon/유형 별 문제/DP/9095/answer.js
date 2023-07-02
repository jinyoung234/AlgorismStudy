/**
 * 1, 2, 3 더하기
 * (https://www.notion.so/1-2-3-a7c4f8111fa8453083336ab9e782f90e)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());

while (n--) {
  const num = Number(input.shift());
  const dp = [0, 1, 2, 4];
  // bottom - up
  for (let i = 4; i <= num; i++) {
    // 1 + i - 1을 표현할 수 있는 경우의 수 => dp[n - 1]
    // 2 + i - 2를 표현할 수 있는 경우의 수 => dp[n - 2]
    // 3 + i - 3을 표현할 수 있는 경우의 수 => dp[n - 3];
    /**
     * ex) n = 4일 때
     * 1 + 3을 표현할 수 있는 경우의 수 = dp[3] => 4
     * 2 + 2를 표현할 수 있는 경우의 수 = dp[2] => 2
     * 3 + 1을 표현할 수 있는 경우의 수 = dp[1] => 1
     * dp[4] = 7
     */
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  // dp 배열의 n번째 값을 출력
  console.log(dp[num]);
}
