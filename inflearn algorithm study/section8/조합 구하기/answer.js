function solution(n, m) {
  const answer = [];
  const tmp = [];
  function DFS(l, s) {
    if (l === m) answer.push(tmp.slice());
    else {
      for (let i = s; i <= n; i++) {
        tmp.push(i);
        DFS(l + 1, i + 1);
        tmp.pop();
      }
    }
  }
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 3));
