/**
 * 알고리즘
 * 1. 주어진 간선을 통해 인접 행렬 생성
 * 2. 모든 노드들에 대해 순회 하며 간선이 체크되어 있고, 간선 정보가 그래프에 있다면 path에 추가
 * 3. 마지막 노드까지 순회를 끝내면 끝까지 탐색 한 것이므로 answer에 추가
 * 4. answer의 길이(방법 수) 출력
 */

/**
 * [
 *   1 2 3 4 5
 *   0 1 1 1 0
 *   1 0 0 0 1
 *   0 0 0 1 0
 *   0 1 0 0 1
 *   0 0 0 0 0
 * ]
 */

function solution(n, m, connects) {
  let graph = Array.from(Array(n), () => Array(n).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let answer = [];
  let path = [1];
  for (let [a, b] of connects) {
    graph[a - 1][b - 1] = 1;
  }
  function DFS(v) {
    if (v === n) {
      let copy = [...path];
      answer.push(copy);
    } else {
      for (let i = 1; i <= n; i++) {
        if (!ch[i] && graph[v - 1][i - 1]) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
  console.log(answer);
  return answer.length;
}

console.log(
  solution(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
