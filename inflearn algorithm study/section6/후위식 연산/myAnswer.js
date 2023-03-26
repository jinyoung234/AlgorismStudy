function solution(str) {
  const stack = [];
  let answer = 0;
  for (let x of str) {
    // 만약 x가 연산자 라면
    if (x === "+" || x === "-" || x === "/" || x === "*") {
      // 만약 answer의 값이 0이라면
      if (answer === 0) {
        // stack에서 2번 pop한 변수를 각각 a,b로 설정
        const a = parseInt(stack.pop());
        const b = parseInt(stack.pop());
        // 연산식에 맞게 a,b를 연산 후 answer에 할당
        switch (x) {
          case "+":
            answer = a + b;
            break;
          case "-":
            answer = a - b;
            break;
          case "*":
            answer = a * b;
            break;
          case "/":
            answer = a / b;
            break;
        }
        // 0이 아니라면 하나만 stack에서 pop한 후 answer과 연산 한 값을 answer에 할당
      } else {
        const a = parseInt(stack.pop());
        switch (x) {
          case "+":
            answer += a;
            break;
          case "-":
            answer -= a;
            break;
          case "*":
            answer *= a;
            break;
          case "/":
            answer /= a;
            break;
        }
      }
      // 아니라면 stack에 x push
    } else {
      stack.push(x);
    }
  }
  return answer;
}

console.log(solution("472+*"));
