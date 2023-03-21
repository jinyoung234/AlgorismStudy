function solution(arr) {
  let size = arr.length;
  // dynamic array 생성
  let dy = Array.from({ length: size }, () => 0);
  let answer = 0;
  // dy 첫번째 요소 1로 초기화
  dy[0] = 1;
  // 전체 요소 순회
  for (let i = 1; i < size; i++) {
    // max 초기화
    let max = 0;
    for (let j = 0; j <= i; j++) {
      // 만약 오름 차순 수열이 가능하고, dy[j]이 max보다 크다면
      if (arr[i] > arr[j] && dy[j] > max) {
        // max에 dy[j] 할당
        max = dy[j];
      }
    }
    // dy[j]가 돌면서 arr[i]가 포함되지 않은 최대 오름 차순 수열의 길이 = max
    // 즉, 기존 max값에 자신이 포함된 길이가 새로운 max값이 된다.
    dy[i] = max + 1;
    // 기존 answer값과 dy[i] 비교 하며 큰 값을 answer에 할당
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
