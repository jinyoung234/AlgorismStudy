/**
 * 쇠 막대기
 */

let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

function solution(brackets) {
  // (를 담기 위한 stack
  const stack = [];

  // 잘려진 쇠 막대기 갯수
  let cuttingIronCount = 0;

  for (let i = 0; i < brackets.length; i += 1) {
    // 현재 괄호와 다음 괄호
    const [currentBracket, nextBracket] = [brackets[i], brackets[i + 1]];

    // 만약 레이저 인 경우 -> ()
    if (currentBracket === '(' && nextBracket === ')') {
      // 현재 stack 길이 만큼 cuttingIronCount를 더하고(stack 길이 만큼 막대를 자른 것) nextBracket 다음 bracket으로 넘어간다.
      cuttingIronCount += stack.length;
      i += 1;
      continue;
      // 만약 막대 시작 부분인 경우
    } else if (currentBracket === '(') {
      // stack에 추가 후 다음 bracket으로 이동
      stack.push(currentBracket);
      continue;
      // 만약 막대 마지막 부분일 경우
    } else if (currentBracket === ')') {
      // 막대 시작 부분을 stack에서 제거하고 cuttingIronCount에 1(마지막 막대 잘려진 것)을 더한 후 다음 괄호로 이동
      stack.pop();
      cuttingIronCount += 1;
    }
  }

  // 잘려진 막대기의 갯수 반환
  return cuttingIronCount;
}

console.log(solution(input));
