/**
 * 올바른 괄호
 */
function solution(s) {
  // 스택 추가
  let stack = [];
  // 문자열 순회
  for (let x of s) {
    // 만약 문자열이 (라면 스택에 추가
    if (x === "(") stack.push(x);
    // 만약 )일 경우
    else {
      // 스택에 아무것도 없는데 )가 들어온건 올바르지 않은 괄호이므로 false 리턴
      if (stack.length === 0) {
        return false;
      }
      // 만약 이전 괄호가 (인데 )가 오는 경우 stack pop
      stack.pop();
    }
  }
  // 만약 )가 부족해서 스택에 ( 괄호가 남으면 올바르지 않은 괄호이므로 false 리턴
  if (stack.length > 0) return false;
  // 나머지 조건을 만족하면 올바른 괄호이므로 true 리턴
  return true;
}

console.log(solution("()()"));
