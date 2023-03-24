function solution(str) {
  let stack = [];
  let answer;
  // 각 문자열 순회
  for (let element of str) {
    // 만약 문자열이 ')'가 아니라면 stack에 추가
    if (element !== ")") stack.push(element);
    // 만약 )라면 가장 마지막 요소 (에서 stack 마지막 요소까지 삭제
    else {
      let start = stack.lastIndexOf("(");
      let deleteLength = stack.length - stack.lastIndexOf("(");
      stack.splice(start, deleteLength);
    }
  }
  // stack에 남아 있는 문자열 answer에 추가
  answer = stack.join("");
  return answer;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
