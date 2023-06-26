/**
 * 막대기
 * (https://www.notion.so/dd0d4fe1845f4a1a99cd89669e3f9136)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input);
let answer = 0;

// n을 0이 될 때까지 계속 2로 나누면서 나머지가 1인 값을 찾아낸다.
while (n > 0) {
  // 만약 나누어 떨어지지 않는다면 answer 값을 1 증가
  if (n & 1) answer++;
  // shift 연산을 통해 n / 2를 한다.
  n = n >> 1;
}

// n을 2진수로 만들면서 몇 개의 1을 가지고 있는지(홀수이면 +1) 구하기
console.log(answer);

/**
 * ex) 23
 *          몫   나머지
 * 23 / 2 = 11    1
 * 11 / 2 =  5    1
 * 5  / 2 =  2    1
 * 2  / 2 =  1    0
 * 1  / 2 =  0    1
 *
 * 1, 5, 11, 23을 이어 붙이면 23이 된다.
 */
