/**
 * 트리
 * (https://www.notion.so/4cf2b8ff1fd34fc08a16263a4e64b62b?pvs=4)
 */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const nodeSize = Number(input[0]);
const nodes = input[1].split(' ').map(Number);
const deleteNodeNumber = Number(input[2]);

const graph = {};

for (let i = 0; i < nodeSize; i += 1) {
  graph[i] = [];
}

let rootNodeNumber = '';

nodes.forEach((parentNodeNumber, nodeNumber) => {
  if (parentNodeNumber === -1) {
    rootNodeNumber = nodeNumber;
    return;
  }

  graph[parentNodeNumber].push(nodeNumber);
});

Object.entries(graph).forEach(([nodeNumber, nodeList]) => {
  if (nodeList.includes(deleteNodeNumber)) {
    graph[nodeNumber] = graph[nodeNumber].filter((number) => number !== deleteNodeNumber);
  }
});

function removeNodeAndDescendants() {
  const queue = [deleteNodeNumber];

  while (queue.length !== 0) {
    const nodeNumber = queue.shift();

    graph[nodeNumber].forEach((childNodeNumber) => {
      queue.push(childNodeNumber);
    });

    delete graph[nodeNumber];
  }
}

removeNodeAndDescendants();

let answer = 0;

function countLeafNodes() {
  const queue = [rootNodeNumber];

  while (queue.length !== 0) {
    const nodeNumber = queue.shift();

    if (!graph[nodeNumber]) continue;
    if (graph[nodeNumber].length === 0) answer += 1;

    graph[nodeNumber].forEach((childNodeNumber) => {
      queue.push(childNodeNumber);
    });
  }
}

countLeafNodes();

console.log(answer);
