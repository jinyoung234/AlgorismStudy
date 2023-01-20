/**
 * 알고리즘
 * 1. answer를 1로 설정
 * 2. DFS를 시작 순서로 호출 후 만약 l이 0이면 종료, 아니면 l - 1로 DFS 재귀 호출
 */

function solution(num) {
  let answer = 1;
  function DFS(l) {
    if (l === 0) return;
    else {
      answer *= l;
      DFS(l - 1);
    }
  }
  DFS(num);
  console.log(answer);
}

console.log(solution(5));
