/**
 * 키로거
 * (https://www.notion.so/2694f252597440aeb244d77e1dfc2708?pvs=4)
 */

let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(logs) {
  let answer = '';

  for (const log of logs) {
    // 커서 왼쪽의 문자들을 저장할 스택
    const leftStack = [];
    // 커서 오른쪽의 문자들을 저장할 스택
    const rightStack = [];

    for (const char of log) {
      switch (char) {
        case '<': // 왼쪽 화살표: 커서를 왼쪽으로 이동
          if (leftStack.length > 0) {
            rightStack.push(leftStack.pop());
          }
          break;
        case '>': // 오른쪽 화살표: 커서를 오른쪽으로 이동
          if (rightStack.length > 0) {
            leftStack.push(rightStack.pop());
          }
          break;
        case '-': // 백스페이스: 커서 왼쪽의 문자를 삭제
          leftStack.pop();
          break;
        default: // 그 외 문자: 커서 위치에 문자를 삽입
          leftStack.push(char);
      }
    }
    // 왼쪽 스택의 문자들과 오른쪽 스택의 문자들(역순으로)을 결합하여 결과 문자열을 생성
    answer += leftStack.join('') + rightStack.reverse().join('') + '\n';
  }

  // 결과 문자열 반환
  return answer.trim();
}

console.log(solution(input.slice(1)));
