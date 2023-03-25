function solution(s) {
  let answer = "YES";
  let stack = [];
  // 문자열 순회
  for (let x of s) {
    // 만약 한 문자열이 ( 이라면 stack에 추가
    if (x === "(") stack.push(x);
    else {
      // 만약 한 문자열이 )인데 stack에 없는 경우엔 NO 출력
      if (stack.length === 0) return "NO";
      // stack에 (가 있다면 stack에 있는 (를 지우기
      stack.pop();
    }
  }
  // 만약 stack에 남는 문자열이 있다면 그건 올바른 괄호가 아니므로 NO 출력
  if (stack.length > 0) return "NO";
  // answer 출력
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
