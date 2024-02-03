/**
 * 큐 2
 * (https://www.notion.so/2-8bd62f45bd1f4a9d908b177ed58c77a1?pvs=4)
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
    return this;
  }

  pop() {
    if (this.first === null) return -1;

    const removeNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removeNode.next;
      removeNode.next = null;
    }

    this.size -= 1;
    return removeNode.value;
  }

  getSize() {
    return this.size;
  }

  empty() {
    return this.size === 0 ? 1 : 0;
  }

  front() {
    return this.size !== 0 ? this.first.value : -1;
  }

  back() {
    return this.size !== 0 ? this.last.value : -1;
  }
}

function solution(expression) {
  let answer = '';
  const queue = new Queue();

  for (const operator of expression) {
    if (operator.startsWith('push')) {
      const number = parseInt(operator.replace('push ', ''));
      queue.push(number);
    } else if (operator === 'pop') {
      answer += `${queue.pop()}\n`;
    } else if (operator === 'size') {
      answer += `${queue.getSize()}\n`;
    } else if (operator === 'empty') {
      answer += `${queue.empty()}\n`;
    } else if (operator === 'front') {
      answer += `${queue.front()}\n`;
    } else if (operator === 'back') {
      answer += `${queue.back()}\n`;
    }
  }

  console.log(answer);
}

solution(input.slice(1));
