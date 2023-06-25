/**
 * 사탕게임
 * (https://www.notion.so/d314b1a67fe6423cb5b56c59f8f82bb6)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const candies = input.map((s) => s.split(""));

let maxCandies = 0;

// 연속된 사탕의 개수를 비교하는 함수
function countConsecutiveCandies(arr) {
  let [maxCount, count] = [1, 1];

  for (let i = 1; i < arr.length; i++) {
    // 만약 두 사탕이 같다면
    if (arr[i] === arr[i - 1]) {
      // 연속된 사탕의 개수 추가
      count++;
      // maxCount와 count랑 비교해서 더 큰 값 추가
      maxCount = Math.max(maxCount, count);
      // 두 사탕이 같지 않다면 count를 다시 1로 초기화
    } else count = 1;
  }
  // 최대 연속된 개수의 사탕을 반환
  return maxCount;
}

// col 방향으로 인접한 사탕들을 교환
for (let row = 0; row < n; row++) {
  for (let col = 0; col < n - 1; col++) {
    // 인접한 사탕 끼리 서로 교환
    [candies[row][col], candies[row][col + 1]] = [candies[row][col + 1], candies[row][col]];

    for (let i = 0; i < n; i++) {
      // col 방향으로 0번째 col ~ n - 1번째 col에서 연속된 사탕의 갯수를 찾은 후 maxCandies와 비교하여 더 큰 값을 maxCandies에 추가
      maxCandies = Math.max(maxCandies, countConsecutiveCandies(candies[i]));
      // row 방향으로 0번째 row ~ n - 1번째 row에서 연속된 사탕의 갯수를 찾은 후 maxCandies와 비교하여 더 큰 값을 maxCandies에 추가
      maxCandies = Math.max(maxCandies, countConsecutiveCandies(candies.map((r) => r[i])));
    }

    // 다시 인접한 사탕들을 원래대로 돌려 놓는다.
    [candies[row][col], candies[row][col + 1]] = [candies[row][col + 1], candies[row][col]];
  }
}

// row 방향으로 인접한 사탕들을 서로 교환
for (let col = 0; col < n; col++) {
  for (let row = 0; row < n - 1; row++) {
    // 인접한 사탕 끼리 서로 교환
    [candies[row][col], candies[row + 1][col]] = [candies[row + 1][col], candies[row][col]];

    for (let i = 0; i < n; i++) {
      // col 방향으로 0번째 col ~ n - 1번째 col에서 연속된 사탕의 갯수를 찾은 후 maxCandies와 비교하여 더 큰 값을 maxCandies에 추가
      maxCandies = Math.max(maxCandies, countConsecutiveCandies(candies[i]));
      // row 방향으로 0번째 row ~ n - 1번째 row에서 연속된 사탕의 갯수를 찾은 후 maxCandies와 비교하여 더 큰 값을 maxCandies에 추가
      maxCandies = Math.max(maxCandies, countConsecutiveCandies(candies.map((r) => r[i])));
    }

    // 다시 인접한 사탕들을 원래대로 돌려 놓는다.
    [candies[row][col], candies[row + 1][col]] = [candies[row + 1][col], candies[row][col]];
  }
}

// 최대 사탕 개수 출력
console.log(maxCandies);
