/**
 * [인접 리스트 사용하는 이유]
 * 인접 행렬이 20개 정도면 상관 없지만 1000개 10만개 만큼 나올 경우를 생각해보자.
 * for문을 1000번 10만번 하게 되는데, 이는 메모리 낭비 및 시간 복잡도가 매우 높은 연산이라 비 효율적이다.
 * 하지만 인접 리스트를 사용할 경우 1~n까지가 아닌 1~g[v].length 만큼 순회하기 때문에
 * 효율적인 연산이 가능한 것이다. 이때, 인접 리스트는 map으로 구현한다.
 */

function solution(n, m, connects) {
  let graph = new Map();
  let ch = Array.from({ length: n + 1 }, () => 0);
  let answer = [];
  let path = [1];
  for (let [a, b] of connects) {
    if (!graph.has(a)) graph.set(a, [b]);
    else graph.set(a, [...graph.get(a), b]);
  }
  function DFS(v) {
    if (v === n) {
      let copy = [...path];
      answer.push(copy);
    } else {
      for (let i = 0; i < graph.get(v).length; i++) {
        if (!ch[graph.get(v)[i]]) {
          ch[graph.get(v)[i]] = 1;
          path.push(graph.get(v)[i]);
          DFS(graph.get(v)[i]);
          ch[graph.get(v)[i]] = 0;
          path.pop();
        }
      }
    }
  }
  ch[1] = 1;
  DFS(1);
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
