/**
 * 배달
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=87bc38d06a8a45e98629f221768fb07e&pm=s)
 */
function solution(N, road, K) {
  // 최단 거리 테이블
  const minTable = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  // 각 노드들에 대한 경로 정보를 담기 위한 routes
  const routes = Array.from(Array(N + 1), () => []);
  // road를 순회 하며 각 노드 간 연결 정보와 가중치를 routes에 추가
  road.forEach(([nodeA, nodeB, n]) => {
    routes[nodeA].push({ connectNode: nodeB, cost: n });
    routes[nodeB].push({ connectNode: nodeA, cost: n });
  });
  const queue = [{ connectNode: 1, cost: 0 }];
  // 1 -> 1에 대한 최단 거리는 0으로 초기화
  minTable[1] = 0;
  // 넓이 우선 탐색 시작
  while (queue.length) {
    // 노드 가져옴
    let { connectNode } = queue.pop();
    // node에 있는 연결 정보 모두 순회
    routes[connectNode].forEach((next) => {
      // 만약 노드의 기존 최단 거리보다 더 최단 거리라면
      if (minTable[next.connectNode] > minTable[connectNode] + next.cost) {
        // 최단 거리 갱신
        minTable[next.connectNode] = minTable[connectNode] + next.cost;
        // queue에 추가
        queue.push(next);
      }
    });
  }
  // 각 노드의 최단 거리가 K보다 작거나 같은 갯수 출력
  return minTable.filter((nodeMinDistance) => nodeMinDistance <= K).length;
}

solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
);
