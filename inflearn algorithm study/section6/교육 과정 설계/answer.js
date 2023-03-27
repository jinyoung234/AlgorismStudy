function solution(essentialSubject, plan) {
  // 초기 답 YES로 초기화
  let answer = "YES";
  // 필수과목을 queue에 추가
  let queue = essentialSubject.split("");
  // 과목 순서 순회
  for (let x of plan) {
    // 만약 특정 과목이 필수 과목 이라면
    if (queue.includes(x)) {
      // 만약 그 과목이 필수 과목 순서와 다른 과목이라면 NO 출력
      if (x !== queue.shift()) return "NO";
    }
  }
  // 필수과목이 queue에 남아있다? -> 필수과목이 계획에 없는 것이므로 NO 출력
  if (queue.length > 0) return "NO";
  return answer;
}

console.log(solution("CBA", "CBDAGE"));
