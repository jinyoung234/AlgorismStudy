/**
 * 천재 수학자 성필
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

function solution(expression) {
  const stack = [];
  // 피연산자 or 연산자에 대해 순회
  for (const operator of expression) {
    // 만약 피연산자라면 stack에 추가
    if (!Number.isNaN(Number(operator))) {
      stack.push(Number(operator));
    } else {
      // 연산자라면 stack에서 2개의 피연산자를 pop
      const b = stack.pop();
      const a = stack.pop();

      // operator에 맞는 연산을 진행 후 stack에 추가
      switch (operator) {
        case '+': {
          stack.push(a + b);
          break;
        }
        case '-': {
          stack.push(a - b);
          break;
        }
        case '/': {
          stack.push(Math.floor(a / b));
          break;
        }
        case '*': {
          stack.push(a * b);
          break;
        }
      }
    }
  }
  // stack에 남아 있는 값을 반환
  return stack[0];
}

console.log(solution(input));
