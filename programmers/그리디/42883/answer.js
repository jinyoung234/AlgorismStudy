/**
 * 큰 수 만들기
 */
function solution(number, k) {
  let stack = [];
  // 문자열 전체 순회
  for (let i = 0; i < number.length; i++) {
    // 순회 중인 문자열 내 숫자 값
    let now = number[i];
    // 만약 스택에 있는 마지막 요소보다 현재 숫자 값이 더 크다면 스택에서 제거 후 k값 1감소
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    // while 내 조건을 만족하지 않으면 stack에 추가
    stack.push(now);
  }
  // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함
  stack.splice(stack.length - k, k);
  return stack.join("");
}

console.log(solution("4177252841", 4));
