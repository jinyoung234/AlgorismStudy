/**
 * 이진 탐색 트리
 * (https://www.notion.so/6f6e60c234a24156a64d5b5b858f3524?pvs=4)
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  postOrderProcess(node, result = '') {
    if (node !== null) {
      result = this.postOrderProcess(node.left, result);
      result = this.postOrderProcess(node.right, result);
      result += `${node.value}\n`;
    }
    return result;
  }

  postOrder() {
    return this.postOrderProcess(this.root).trim();
  }
}

const preOrderResult = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const binaryTree = new BinaryTree();

preOrderResult.forEach((value) => {
  binaryTree.insert(value);
});

const result = binaryTree.postOrder();

console.log(result);
