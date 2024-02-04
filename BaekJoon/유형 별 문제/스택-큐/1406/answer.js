/**
 * 에디터
 * (https://www.notion.so/3d485db451514bd2a86fd4b745a2864b?pvs=4)
 */

let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const [s, c] = [input[0], input.slice(2)];

function solution(string, commands) {
  const leftStack = [...string];
  const rightStack = [];

  for (const commend of commands) {
    if (commend === 'L') {
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
    } else if (commend === 'D') {
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
    } else if (commend === 'B') {
      leftStack.pop();
    } else {
      const string = commend.replace('P ', '');
      leftStack.push(string);
    }
  }

  return leftStack.join('') + rightStack.reverse().join('');
}

console.log(solution(s, c));
