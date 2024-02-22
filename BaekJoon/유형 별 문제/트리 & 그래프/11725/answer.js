/**
 * 트리의 부모 찾기
 * (https://www.notion.so/ab78026f2af640bfae02e03f0c1b28d4?pvs=4)
 */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const maxValue = Number(input[0]);

const trunk = input.slice(1).map((s) => s.split(' ').map(Number));

const graph = {};

for (let i = 1; i <= maxValue; i += 1) {
  graph[i] = [];
}

for (const [from, to] of trunk) {
  graph[from].push(to);
  graph[to].push(from);
}

const parents = new Array(maxValue).fill(0);

function bfs(node) {
  const queue = [node];
  parents[node] = node; // 루트의 부모는 자기 자신으로 초기화(또는 -1 또는 0으로 초기화 가능)

  while (queue.length > 0) {
    const currentNode = queue.shift();

    graph[currentNode].forEach((nextNode) => {
      if (!parents[nextNode]) {
        // 아직 방문하지 않은 노드라면
        parents[nextNode] = currentNode; // 부모 노드를 기록
        queue.push(nextNode);
      }
    });
  }
}

// 루트 노드부터 시작하여 부모 노드 찾기
bfs(1);

// 2번 노드부터 부모 노드 출력
const result = parents.slice(2).join('\n');
console.log(result);
