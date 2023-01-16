/**
 * 고려 사항
 * 1. 제한 시간 M안에 N개의 문제 중 최대 점수를 얻을 수 있도록 해야한다.
 * 2. 해당 시간만큼 소요되면 푸는 걸로 간주
 * 3. 한 유형 당 하나만 풀기 가능
 * 4. 1번째 줄 N = 문제 개수, M = 제한 시간
 * 5. 2번째 줄부터 각각 점수, 시간
 */

/**
 * 알고리즘
 * 1. DFS 함수 호출
 * 2. 만약 제한 시간 보다 문제 푼 시간이 길다면 종료
 * 3. 만약 level이 n에 도달하고 최대 시간 보다 문제 푼 시간이 적다면 누적된 점수를 answer에 추가
 * 4. 그게 아니라면 문제를 푼 경우와 풀지 못한 경우로 나눠 DFS 재귀 호출
 */

function solution(n, m, arr) {
  let answer = [];
  function DFS(level, point, time) {
    if (m < time) return;
    if (level === n) {
      if (m >= time) answer.push(point);
    } else {
      DFS(level + 1, point + arr[level][0], time + arr[level][1]);
      DFS(level + 1, point, time);
    }
  }
  DFS(0, 0, 0);
  return Math.max(...answer);
}

console.log(
  solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
