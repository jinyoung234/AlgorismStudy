/**
 * 트리와 쿼리
 * (https://www.notion.so/3aa0ff4e4b054fd0985305854c7e41c7?pvs=4)
 */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, r] = input[0].split(' ').map(Number);

const edges = input.slice(1, n).map((s) => s.split(' ').map(Number));

const queries = input.slice(n).map(Number);

const graph = {};

for (let nodeValue = 1; nodeValue <= n; nodeValue += 1) {
  graph[nodeValue] = [];
}

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const tree = {};

function makeTree(currentNode, parent) {
  const connectedNodes = graph[currentNode];

  tree[currentNode] = [];

  connectedNodes.forEach((connectedNode) => {
    if (connectedNode !== parent) {
      tree[currentNode].push(connectedNode);

      makeTree(connectedNode, currentNode);
    }
  });
}

makeTree(r, -1);

const subtreeSizes = Array.from({ length: n + 1 }, () => 0);

function countSubtreeNodes(currentNode) {
  subtreeSizes[currentNode] = 1;

  tree[currentNode].forEach((childNode) => {
    countSubtreeNodes(childNode);

    subtreeSizes[currentNode] += subtreeSizes[childNode];
  });

  return subtreeSizes[currentNode];
}

countSubtreeNodes(r);

let answer = '';

queries.forEach((subtreeRootNode) => {
  answer += `${subtreeSizes[subtreeRootNode]}\n`;
});

console.log(answer.trim());
