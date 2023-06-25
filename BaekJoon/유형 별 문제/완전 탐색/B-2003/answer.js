/**
 * 수들의 합 2
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function solution(n, m, numbers) {
  // 왼쪽 포인터 변수, sum, answer 0으로 초기화
  let lt = (sum = answer = 0);
  // 오른쪽 포인터 변수를 n까지 순회
  for (let rt = 0; rt < n; rt++) {
    // sum에 numbers에서 rt번째 있는 값 추가
    sum += numbers[rt];
    // sum과 m이 같으면 answer 1 증가
    if (sum === m) answer++;
    // 만약 sum이 m보다 더 크면
    while (sum > m) {
      // numbers에 있는 lt번째 값을 sum에서 뺀 후 lt 1증가
      sum -= numbers[lt++];
      // 만약 sum을 뺏을 때 m과 같으면 answer 1 증가
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(solution(a, b, arr));
