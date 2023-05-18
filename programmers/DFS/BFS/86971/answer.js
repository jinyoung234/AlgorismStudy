/**
 * 전력망 둘로 나누기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=a43711a6b4cc44d293f5376e568f591b&pm=s)
 */

// 송전 탑 갯수를 구하는 함수 dfs
const dfs = (arr, node) => {
  let result = 0;
  // 노드들을 하나씩 방문하기 위해 for문으로 순회
  /**
   * ex) [1, 2]를 끊는 경우
   *
   * 0번 노드 => [0, 0, 0, 0, 0]
   * 1번 노드 => [0, 0, 0, 0, 0]
   * 2번 노드 => [0, 0, 0, 1, 0]
   * 3번 노드 => [0, 0, 1, 0, 1]
   * 4번 노드 => [0, 0, 0, 1, 0]
   *
   * dfs(_graph, a)는 연결된게 하나도 없으므로 0이 된다.
   * dfs(_graph, b)는 연결된게 2 - 3이 있으므로 연결된 것을 지우고 dfs 재귀로 3번 노드로 넘어가서
   * 3번 노드에서 다시 연결된 것을 찾고, 3 - 4가 있으므로 연결된 것을 지우고 4번 노드로 넘어간다.
   * 4번 노드는 없으므로 재귀가 종료 되고 백트래킹을 통해 돌아와도 모든 노드가 0이므로 그대로 2를 반환한다.
   */
  for (let i = 0; i <= arr[node].length; i++) {
    if (arr[node][i]) {
      arr[node][i] = arr[i][node] = 0;
      result += 1 + dfs(arr, i);
    }
  }
  return result;
};

function solution(n, wires) {
  // 가장 최대 값
  let answer = 101;
  // 각 노드들에 대한 연결 정보를 얻기 위한 graph(n+1행, n+1열)
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // wires 순회하며 전력망에 연결 되어 있는 것들 graph에 추가
  wires.forEach(([a, b]) => {
    graph[b][a] = graph[a][b] = 1;
  });
  // 다시 wires 순회하며 연결 되어 있는 것을 끊었을 때 두 전력망이 가지고 있는 송전탑 개수의 차이의 최솟 값을 answer에 추가
  // ex) 1 - 2 - 3 - 4 -> 1 - 2 / 3 - 4 = 0
  wires.forEach(([a, b]) => {
    const _graph = graph.map((v) => v.slice());
    _graph[a][b] = _graph[b][a] = 0;
    answer = Math.min(answer, Math.abs(dfs(_graph, a) - dfs(_graph, b)));
  });
  return answer;
}
solution(4, [
  [1, 2],
  [2, 3],
  [3, 4],
]);
