function solution() {
  let ch = Array.from({ length: n }, () => 0);
  let element = [];
  let answer = [];
  function DFS(l) {
    if (l > r) return;
    if (l === r) {
      let copy = [...element];
      let size = copy.length;
      if (size === r) {
        answer.push(copy);
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          element.push(arr[i]);
          DFS(l + 1);

          ch[i] = 0;
          element.pop();
          DFS(l + 1);
        }
      }
    }
  }
  DFS(0);
  console.log(answer);
}

console.log(solution(3, [3, 6, 9], 2));
