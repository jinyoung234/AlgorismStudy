function solution(string) {
  let size = string.length;
  // stack 추가
  let stack = [];
  // 스택의 last 인덱스 변수 초기화
  let lastIndex = stack.length === 0 ? 0 : stack.length - 1;
  for (let i = 0; i < size; i++) {
    // 만약 스택의 마지막 인덱스가 (이고 i번째 요소가 )일 경우 (올바른 괄호일 경우) (을 stack에서 제거
    if (stack[lastIndex] === "(" && string[i] === ")") stack.pop();
    // 그게 아니라면 (이든 )이든 stack에 추가
    else stack.push(string[i]);
  }
  // 만약 스택의 길이가 0보다 크다면 올바르지 않은 괄호 이므로 NO 출력
  if (stack.length > 0) return "NO";
  // 그게 아니라면 YES 출력
  else return "YES";
}

console.log(solution("(()(()))(()"));
