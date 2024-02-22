/**
 * 트리 순회
 * (https://www.notion.so/9f33b2c2569a4d009aadfbf521ced06a?pvs=4)
 */

// tree 생성
const items = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1);

const tree = {};

items.forEach((item) => {
  const [value, left, right] = item.split(' ');

  tree[value] = { left, right };
});

// 전위 순회
let preOrderResult = '';

const rootNode = 'A';

function preOrder(nodeValue) {
  if (!nodeValue || nodeValue === '.') return;

  const node = tree[nodeValue];
  preOrderResult += nodeValue;

  preOrder(node.left);
  preOrder(node.right);
}

preOrder(rootNode);

// 중위 순회
let inOrderResult = '';

function inOrder(nodeValue) {
  if (!nodeValue || nodeValue === '.') return;

  const node = tree[nodeValue];

  inOrder(node.left);

  inOrderResult += nodeValue;

  inOrder(node.right);
}

inOrder(rootNode);

// 후위 순회
let postOrderResult = '';

function postOrder(nodeValue) {
  if (!nodeValue || nodeValue === '.') return;

  const node = tree[nodeValue];

  postOrder(node.left);

  postOrder(node.right);

  postOrderResult += nodeValue;
}

postOrder(rootNode);

// 전위 순회, 중위 순회, 후위 순회 결과를 각각 반환
console.log(`${preOrderResult}\n${inOrderResult}\n${postOrderResult}`);
