/** 알고리즘
 * 1. 현재 피로도 설정
 * 2. 모든 경우의 수로 서로 던전들을 swap
 * 3. 던전들을 돌며 현재 피로도가 최소 소모 피로도보다 크거나 같을 경우에만 count 1 증가
 * 4. swap 한 요소들 원 상태로 복귀
 * 5. 만약 기존 answer 보다 count가 클 경우에만 추가
 * 6. 사이클 반복 후 가장 큰 answer가 출력
 */

/** 고려 사항
 * 1. 최소 필요 피로도 >= 소모 피로도
 * 2. 서로 다른 던전의 [최소 필요 피로도, 소모 피로도]는 서로 같을 수 있다.
 * 3. 던전의 순서가 서로 바뀔 수 있음을 고려
 */

function solution(k, dungeons) {
  let answer = 0;
  for (let i = 0; i < dungeons.length; i++) {
    for (let j = 0; j < dungeons.length; j++) {
      // 각 던전 마다 swap 될 수 있는 모든 경우의 수로 swap
      if (i !== j) [dungeons[i], dungeons[j]] = [dungeons[j], dungeons[i]];
      // 돌수 있는 던전 수
      let count = 0;
      // 현재 피로도
      let currentFatigue = k;
      for (let k = 0; k < dungeons.length; k++) {
        // 만약 현재 피로도가 최소 소모 피로도보다 크거나 같을 경우 count 1 증가
        if (currentFatigue >= dungeons[k][0]) {
          count = count + 1;
          // 현재 피로도에서 소모 피로도 만큼 빼줌
          currentFatigue -= dungeons[k][1];
        }
      }
      // swap 한 것 다시 원 위치로 복귀
      if (i !== j) [dungeons[j], dungeons[i]] = [dungeons[i], dungeons[j]];
      // 만약 기존 값보다 클 경우에만 answer에 추가
      if (answer < count) answer = count;
      else continue;
    }
  }
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

// 0.68솔인데 도저히 반례를 못찾겠다.
