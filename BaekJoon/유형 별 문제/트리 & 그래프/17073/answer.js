/**
 * 나무 위의 빗물
 * (https://www.notion.so/9b2c2dab2226418a800a2334fd38efc3?pvs=4)
 */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.split(' ').map(Number));

const [n, w] = input[0];

const edges = input.slice(1);

const graph = {};
const tree = {};

for (let i = 1; i <= n; i += 1) {
  graph[i] = [];
  tree[i] = [];
}

const visited = Array.from({ length: n + 1 }, () => false);

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const queue = [1];
visited[1] = true;

while (queue.length !== 0) {
  const nodeValue = queue.pop();

  const neighborNodes = graph[nodeValue];

  neighborNodes.forEach((neighborNode) => {
    if (!visited[neighborNode]) {
      visited[neighborNode] = true;

      tree[nodeValue].push(neighborNode);

      queue.push(neighborNode);
    }
  });
}

queue.push(1);

let leafNodes = 0;

Object.values(tree).forEach((childNodes) => {
  if (childNodes.length === 0) leafNodes += 1;
});

console.log(w / leafNodes);
