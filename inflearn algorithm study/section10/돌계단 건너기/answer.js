function solution(n) {
  // dynamic array 생성
  let dy = Array.from({ length: n + 2 }, () => 0);
  let answer = 0;
  // 1번째 계단, 2번째 계단은 미리 초기화
  dy[1] = 1;
  dy[2] = 2;
  // 계단의 개수인 3 ~ n 까지 순회 -> 도출한 점화식을 통해 n번째 까지 dy에 값 할당
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  // dy 배열의 가장 마지막 요소를 answer에 추가
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));
