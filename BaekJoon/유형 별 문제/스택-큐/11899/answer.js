/**
 * 괄호 끼워넣기
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

function solution(brackets) {
  const stack = [];

  let answer = 0;

  for (let i = 0; i < brackets.length; i += 1) {
    const currentBracket = brackets[i];

    if (currentBracket === '(') {
      stack.push(currentBracket);
    } else if (currentBracket === ')' && stack.length > 0) {
      stack.pop();
    } else if (currentBracket === ')' && stack.length === 0) {
      answer += 1;
    }
  }

  if (stack.length > 0) answer += stack.length;

  return answer;
}

console.log(solution(input));
