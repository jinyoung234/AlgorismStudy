/**
 * 수식 최대화
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=57cfedb1d4de4d13addb09f72c1efee7&pm=s)
 */
function solution(expression) {
  let answer = 0;
  // expressions - 숫자와 연산자에 대해 분리한 배열
  // operatorList - 모든 경우의 수에 대한 연산자 배열
  const [expressions, operatorList] = [
    expression.match(/([0-9]{1,3})|([-|+|*])/g),
    [
      ["+", "*", "-"],
      ["+", "-", "*"],
      ["*", "+", "-"],
      ["*", "-", "+"],
      ["-", "*", "+"],
      ["-", "+", "*"],
    ],
  ];
  for (let i = 0; i < operatorList.length; i++) {
    // 연산자 우선 순위 반영을 위한 operatorList의 복사 값
    const _operatorList = operatorList[i];
    // expressions에 영향을 주기 않기 위한 복사 값과 answer와 비교할 sum
    let [_expressions, sum] = [expressions.slice(), 0];
    for (let j = 0; j < 3; j++) {
      // 각각 _expressions를 복사한 값, 연산자, 스택
      const [__expressions, operator, stack] = [
        _expressions.slice(),
        _operatorList.shift(),
        [],
      ];
      // __expressions 내 모든 요소를 모두 shift 할 때 까지 반복
      while (__expressions.length !== 0) {
        // __expressions 배열 내 요소
        const element = __expressions.shift();
        // element가 우선 순위 연산자가 아니라면 stack에 추가
        if (element !== operator) stack.push(element);
        // 우선 순위 연산자라면 stack에서 연산자 관련 값 a, b를 연산자에 맞게 연산
        if (element === operator) {
          const a = Number(stack.pop());
          const b = Number(__expressions.shift());
          if (operator === "+") stack.push(a + b);
          if (operator === "-") stack.push(a - b);
          if (operator === "*") stack.push(a * b);
        }
      }
      // 다른 연산자에 대한 계산을 위해 stack에 있는 값을 _expressions 재 할당
      _expressions = stack;
      // stack의 길이가 1일 때 값이 나오기 때문에 sum에 추가
      if (stack.length === 1) sum = stack.join();
    }
    // sum과 기존 answer와 비교하여 answer에 재 할당
    answer = Math.max(answer, Math.abs(sum));
  }
  return answer;
}
