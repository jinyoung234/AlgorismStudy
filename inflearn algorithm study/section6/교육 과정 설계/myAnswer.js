function solution(essentialSubject, plan) {
  let answer = "YES";
  let queue = Array.from({ length: plan.length }, (_, i) => plan[i]);
  for (let i = 0; i < plan.length; i++) {
    const a = queue.shift();
    if (essentialSubject.includes(a)) queue.push(a);
  }
  for (let i = 0; i < essentialSubject.length; i++) {
    if (essentialSubject[i] !== queue[i]) answer = "NO";
  }
  return answer;
}

console.log(solution("CBA", "CBDAGE"));
