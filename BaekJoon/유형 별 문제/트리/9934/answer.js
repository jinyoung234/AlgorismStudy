/**
 * 완전 이진 트리
 * (https://www.notion.so/f2c1a635fa7a4d90965aefd5688a8948?pvs=4)
 */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const [K, N] = [Number(input[0]), input[1].split(' ').map(Number)];

const answer = Array.from({ length: K }, () => []);

function makeTree(nodes, level) {
  if (nodes.length === 1) {
    answer[level].push(nodes[0]);
    return;
  }

  const center = Math.floor(nodes.length / 2);

  const leftArr = nodes.slice(0, center);
  const rightArr = nodes.slice(center + 1);

  answer[level].push(nodes[center]);

  makeTree(leftArr, level + 1);
  makeTree(rightArr, level + 1);
}

makeTree(N, 0);

console.log(answer.map((node) => node.join(' ')).join('\n'));
