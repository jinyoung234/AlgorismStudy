function solution(n, m) {
  let answer = [];
  let combi = [];
  function DFS(l) {
    if (l > n + 1) return;
    if (combi.length === m) {
      let copy = [...combi];
      answer.push(copy);
    } else {
      combi.push(l);
      DFS(l + 1);
      combi.pop();
      DFS(l + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(4, 3));
