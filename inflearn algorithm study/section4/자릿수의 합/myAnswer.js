// 1. 요소들의 각 자리수를 해시 맵에 추가한다.
// 2. 각 자리수 합, 요소를 해시 맵에 저장한다.
// 3. 만약 키가 기존 해시 맵에 존재한다면 키에 대한 값과 비교하여 클 경우 해시 맵에 추가
// 4. 존재하지 않는다면 키(자리수 합) - 값(요소) 해시 맵에 추가
// 5. 각 자리수 합이 가장 큰 값을 찾은 후 그 키에 대한 값 출력

let numArr = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .join()
  .split(" ");

// 각 자리수를 배열로 저장할 temp
let numTable = new Map();

// 완전탐색을 통해 요소들의 각 자리수들을 모두 더 해 temp에 추가
for (let num of numArr) {
  let sum = num.split("").reduce((a, b) => a + Number(b), 0);
  // 만약 각 자리수 합이 해시 맵에 존재한다면 기존 각 자리수 합에 대한 값과 비교하여 클 경우 키에 추가
  if (numTable.has(sum)) {
    if (numTable.get(sum) < num) numTable.set(sum, Number(num));
    // 존재하지 않는다면 해시 맵에 키 - 값 추가
  } else {
    numTable.set(sum, Number(num));
  }
}

// 각 자리수 합이 가장 큰 값 뽑음
const max = Math.max(...numTable.keys());

// 자리수 합이 가장 큰 값 중 큰 값 출력
console.log(numTable.get(max));
