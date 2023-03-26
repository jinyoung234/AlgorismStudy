function solution(str) {
  const stack = [];
  let answer = 0;
  for (let x of str) {
    // 만약 x가 숫자 라면
    if (!isNaN(x)) stack.push(Number(x));
    // x가 연산식이라면
    else {
      // 숫자 두 개 stack에서 pop
      const a = stack.pop();
      const b = stack.pop();
      // stack에 a, b 연산 한 값을 stack에 다시 추가
      switch (x) {
        case "+":
          stack.push(b + a);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(b * a);
          break;
        case "/":
          stack.push(b / a);
          break;
      }
    }
  }
  // answer에 stack의 가장 첫 번째 값을 할당
  answer = stack[0];
  // answer 리턴
  return answer;
}

console.log(solution("352+*9-"));
