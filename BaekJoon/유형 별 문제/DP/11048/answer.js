/**
 * 이동하기
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=c9d4996e23ea42389da21d4b5c5999ea&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input.shift().split(" ").map(Number);

const candies = input.map((s) => s.split(" ").map(Number));

// col이 0일 때는 위쪽만 더하면 되므로 다음과 같이 연산
for (let i = 1; i < n; i++) {
  candies[i][0] += candies[i - 1][0];
}

// row가 0일 땐 왼쪽만 더하면 되므로 다음과 같이 연산
for (let i = 1; i < m; i++) {
  candies[0][i] += candies[0][i - 1];
}

// bottom - up
for (let row = 1; row < n; row++) {
  for (let col = 1; col < m; col++) {
    // row번째 col번째 candies의 최대값은 위쪽, 대각선, 왼쪽의 candies의 최댓값 + 자기 자신을 더했을 때 가장 최대
    candies[row][col] += Math.max(candies[row - 1][col], candies[row][col - 1], candies[row - 1][col - 1]);
  }
}

// n번째 m번째 candy를 출력
console.log(candies[n - 1][m - 1]);
