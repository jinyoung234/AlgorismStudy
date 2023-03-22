function solution(m, coins) {
  let answer = 0;
  // dynamic array 설정
  let dy = Array.from({ length: m + 1 }, () => 1000);
  // dy 가장 처음 요소 0으로 초기화
  dy[0] = 0;
  // 각 동전 순회
  for (let i = 0; i < coins.length; i++) {
    // dy 순회
    for (let j = coins[i]; j <= m; j++) {
      // 기존 dy[j]랑 dy[j-coins[i]] + 1과 비교하여 더 작은 값(최소 동전의 개수) dy[j]에 추가
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
    }
  }
  // 동전 순회 끝나면 answer에 dy의 가장 마지막 요소(가장 최소 동전의 개수) 추가
  answer = dy[m];
  return answer;
}

console.log(solution(15, [1, 2, 5]));
