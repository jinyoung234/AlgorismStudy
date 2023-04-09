/**
 * 블로그 2
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(n, solutions) {
  // 만약 1개만 들어온 경우 셀 필요가 없으므로 1리턴
  if (n === 1) return 1;
  // answer 0으로 초기화
  let answer = 0;
  // 0번째 인덱스 ~ 0번째 인덱스와 같은 값의 인덱스까지 순회하기 위한 변수 lastNodeIndex
  let lastNodeIndex = solutions.lastIndexOf(solutions[0]);
  // 1 ~ lastSameNode까지 순회
  for (let i = 1; i <= lastNodeIndex; i++) {
    // 만약 0번째 값과 다르면서, 그 값이 연속되지 않는 다면 answer 1 증가
    if (solutions[0] !== solutions[i] && solutions[i] !== solutions[i + 1])
      answer++;
    // i가 마지막 인덱스 까지 올 때 answer 1 증가
    else if (i === lastNodeIndex) answer++;
  }
  // lastNodeIndex + 1 ~ n 까지 순회
  for (let i = lastNodeIndex + 1; i < n; i++) {
    // 만약 연속되지 않는 값이라면 answer 1 증가
    if (solutions[i] !== solutions[i + 1]) answer++;
    // 만약 i가 마지막 인덱스인데 그 인덱스와 이전 인덱스의 값이 일치하지 않는 다면 1 증가
    else if (i === n - 1 && solutions[i - 1] !== solutions[i]) answer++;
  }
  return answer;
}

console.log(solution(Number(input[0]), input[1].split("")));
