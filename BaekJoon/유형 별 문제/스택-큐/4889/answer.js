/**
 * 안정적인 문자열
 * (https://shelled-operation-d0b.notion.site/ec2337dace6845d880d060129a7cb9e2?pvs=4)
 */
let inputs = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(dataSet) {
  let index = 1;
  let answer = '';

  while (true) {
    const bracketString = dataSet.shift();

    // '-' 문자를 만나면 루프를 중단
    if (bracketString[0] === '-') break;

    const stack = []; // 괄호를 처리하기 위한 스택({{}}와 같은 케이스를 올바르게 처리하기 위함)
    let count = 0;

    // 주어진 괄호 문자열을 순회
    for (let bracket of bracketString) {
      // 스택의 마지막 괄호
      const lastStackBracket = stack[stack.length - 1];

      // 스택이 비어있다면 현재 괄호를 스택에 추가
      if (stack.length === 0) {
        stack.push(bracket);
        continue;
      }

      // 여는 괄호와 닫는 괄호가 쌍을 이루는 경우 스택에서 제거
      if (lastStackBracket === '{' && bracket === '}') {
        stack.pop();
      } else {
        // 쌍을 이루지 않으면 현재 괄호를 스택에 추가
        stack.push(bracket);
      }
    }

    // 스택에 남은 괄호를 처리({{}{와 같은 case들)
    while (stack.length > 0) {
      const [bracket, nextBracket] = [stack.shift(), stack.shift()]; // 연속된 두 괄호를 가져옵니다.

      // 닫는 괄호와 여는 괄호가 연속되는 경우 2번의 연산이 필요하므로 count에 2 더함
      if (bracket === '}' && nextBracket === '{') {
        count += 2;
      } else {
        // 그 외의 경우 1번의 연산이 필요하므로 count에 1 더함
        count += 1;
      }
    }

    // 결과 문자열에 테스트 케이스 번호와 계산된 연산 횟수를 추가
    answer += `${index++}. ${count}\n`;
  }

  // 최종 결과 문자열을 반환
  return answer;
}

console.log(solution(inputs));
