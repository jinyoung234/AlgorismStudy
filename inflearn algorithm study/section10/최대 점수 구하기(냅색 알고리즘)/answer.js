function solution(m, arr) {
  // dynamic table
  let dy = Array.from({ length: m + 1 }, () => 0);
  // answer와 size 초기화
  let answer = 0;
  let size = arr.length;
  // 각 문제 순회
  for (let i = 0; i < size; i++) {
    // 각 문제의 second, score 초기화
    let second = arr[i][1];
    let score = arr[i][0];
    // 제한 시간 ~ 요소의 초까지 순회
    for (let j = m; j >= second; j--) {
      // 기존 최대 값과 새로운 최대 값과 비교하여 더 큰 값을 dy[j](제한 시간 내 최대 점수)에 추가
      dy[j] = Math.max(dy[j], dy[j - second] + score);
    }
  }
  // 제한 시간에 해당 되는 최대 점수를 answer에 할당
  answer = dy[m];
  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
