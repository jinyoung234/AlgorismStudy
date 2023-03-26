function solution(str) {
  // stack과 answer 초기화
  let stack = [];
  let answer = 0;
  // 문자열 전체 순회
  for (let i = 0; i < str.length; i++) {
    // 만약 str[i]가 (이라면 stack에 추가
    if (str[i] === "(") stack.push(str[i]);
    // )이라면
    else {
      // stack pop
      stack.pop();
      // 문자열 i번째와 i-1번째 비교해서 서로 같을 경우 -> 쇠막대기
      if (str[i] === str[i - 1]) {
        // answer에 레이저 잘린 개수 1개 추가
        answer += 1;
        // 서로 다른 경우 -> 레이저
      } else {
        // answer에 레이저에 의해 잘려진 쇠막대기 수 추가
        answer += stack.length;
      }
    }
  }
  return answer;
}

console.log(solution("(((()(()()))(())()))(()())"));
