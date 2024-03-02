/**
 * 단절점과 단절선
 * (https://www.notion.so/4bb0c684d83a4dd2b2e14999a40be1e4?pvs=4)
 */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const vertexCount = Number(input[0]);
const edges = input.slice(1, vertexCount).map((s) => s.split(' ').map(Number));
const questions = input.slice(vertexCount + 1).map((s) => s.split(' ').map(Number));

const graph = {};

for (let i = 1; i <= vertexCount; i += 1) {
  graph[i] = [];
}

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

let answer = '';

questions.forEach(([t, k]) => {
  const edgesInVertex = graph[k];

  if (t === 1) {
    if (edgesInVertex.length <= 1) {
      answer += 'no\n';
    } else {
      answer += 'yes\n';
    }
  } else if (t === 2) {
    answer += 'yes\n';
  }
});

console.log(answer.trim());
