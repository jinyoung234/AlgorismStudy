/**
 * 피보나치 함수
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());

const getZeroAndOneCount = (n) => {
  const dp = [
    [1, 0],
    [0, 1],
  ];
  const fibonacci = (l) => {
    // 만약 l이 0이거나 1이라면 dp 배열의 l번째 요소를 반환
    if (l === 0) return dp[0];

    if (l === 1) return dp[1];

    // 만약 dp[l]이 undefined가 아니고, dp[l]의 0과 1의 갯수가 0보다 클 경우 메모이제이션 된 값을 반환
    if (dp[l] && dp[l].every((e) => e > 0)) return dp[l];

    // l번째 dp에 대한 값을 할당하기 위해 다음과 같이 초기화
    const [a_zero, a_one] = fibonacci(l - 1);
    const [b_zero, b_one] = fibonacci(l - 2);

    // dp 배열의 l번째 요소를 l - 1번째의 zero값 + l - 2번째 zero값 / l - 1번째의 one 값 + l - 2번째 one 값으로 할당
    return (dp[l] = [a_zero + b_zero, a_one + b_one]);
  };
  // top-down 실행
  fibonacci(n);
  // dp 배열의 n번째 요소를 반환
  return dp[n];
};

while (n--) {
  const num = Number(input.shift());
  const answer = getZeroAndOneCount(num);
  console.log(answer.join(" "));
}
