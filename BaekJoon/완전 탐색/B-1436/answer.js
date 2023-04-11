/**
 * 영화감독 숌
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(n) {
  // 초기값 666로 설정
  let answer = 666;
  // count 0으로 초기화
  let count = 0;
  // count가 입력 값과 같을 때 까지 순회
  while (count !== n) {
    // 만약 answer에서 666이 포함되어있다면 count와 answer 1증가
    if (String(answer).includes("666")) {
      count++;
      answer++;
      // 그게 아니라면 answer만 1증가
    } else answer++;
  }
  // count가 n까지 도달했을 때도 answer는 1증가 하기 때문에
  // answer에서 1을 뺀 값을 리턴
  return answer - 1;
}

console.log(solution(Number(input)));
