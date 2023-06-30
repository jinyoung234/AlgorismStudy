/**
 * 피보나치 함수
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=d0c93d4d92f840e9996af1aad836c307&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());

const getZeroAndOneCount = (n) => {
  // 메모이제이션 할 dp 배열 생성 (최적 해를 생성 하기 위함)
  const dp = Array.from({ length: n + 1 }, () => [0, 0]);
  // 0일 때 0은 1번, 1은 0번 생성된다.
  dp[0] = [1, 0];
  // 1일 때 0은 0번, 1은 1번 생성된다.
  dp[1] = [0, 1];
  // 2 ~ n까지의 0과 1의 갯수를 누적 시킨다. (부분 문제들로 가장 큰 문제를 해결)
  for (let i = 2; i <= n; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }
  // n번째 0과 1의 갯수를 반환
  return dp[n];
};

while (n--) {
  const num = Number(input.shift());
  const answer = getZeroAndOneCount(num);
  console.log(answer.join(" "));
}
