const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...rope] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer;

function solution(n, rope) {
  // rope 가벼운 -> 무거운 순으로 정렬
  rope.sort((a, b) => a - b);
  // 들 수 있는 최대 무게 (n개의 로프일 때)
  let maxWeight = rope[0] * rope.length;
  // 가장 가벼운 로프를 줄인 후 기존 최대 무게와 줄였을 때 무게랑 비교 후 더 무거운 걸 maxWeight에 할당
  while (n - 1 > 0) {
    rope.shift();
    n--;
    maxWeight = Math.max(maxWeight, rope[0] * rope.length);
  }
  // k개의 로프 중 최대 무게 출력
  return maxWeight;
}

answer = solution(n, rope);

console.log(answer);
