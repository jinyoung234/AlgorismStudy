/**
 * 괄호의 값
 * (https://www.notion.so/73322d320c53486f8636beb2f7c0ddcc?pvs=4)
 */
let input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim();

function solution(brackets) {
  const stack = [];

  // 각 닫는 괄호에 해당하는 점수를 정의
  const bracketScoreTable = { ')': 2, ']': 3 };

  // 각 닫는 괄호에 매칭되는 여는 괄호를 정의
  const matchingBracket = { ')': '(', ']': '[' };

  // 괄호열 순회
  for (const bracket of brackets) {
    if (bracket === '(' || bracket === '[') {
      // 여는 괄호를 만나면 스택에 추가
      stack.push(bracket);
    } else {
      let sum = 0; // 괄호 내부 점수를 누적할 변수를 초기화

      // 스택이 비어있지 않고, 스택의 최상단에 매칭되는 여는 괄호가 아닐 때까지 반복
      while (stack.length > 0 && stack[stack.length - 1] !== matchingBracket[bracket]) {
        const score = stack.pop();

        // string type 이라면 매칭되지 않는 잘못된 괄호 이므로 0 반환
        if (typeof score === 'string') return 0;

        sum += score; // 점수를 누적
      }

      // 매칭되는 여는 괄호가 없다면 잘못된 괄호 이므로 0 반환
      if (stack.length === 0) return 0;

      stack.pop(); // 매칭되는 여는 괄호를 스택에서 제거

      // 괄호 내부 점수가 0보다 크면 해당 괄호의 가치를 곱하고, 그렇지 않다면 괄호의 기본 가치를 스택에 추가
      const valueToAdd = sum > 0 ? sum * bracketScoreTable[bracket] : bracketScoreTable[bracket];

      stack.push(valueToAdd);
    }
  }

  // 스택에 여는 괄호가 남아있다면, 이는 잘못된 괄호열을 의미
  if (stack.some((item) => typeof item === 'string')) return 0;

  // 스택에 남은 점수들을 모두 더하여 최종 점수를 계산
  return stack.reduce((prevSum, value) => prevSum + value, 0);
}

// 최종적으로 계산된 괄호열의 점수를 출력
console.log(solution(input));
