/**
 * 알고리즘
 * 1. temp들을 저장할 answers와 순열로 선택된 숫자들을 저장하기 위한 temp 추가
 * 2. 첫 번째 뽑았을 때 올 수 있는 모든 숫자(1~n)들을 고려하여 temp에 저장
 * 3. DFS의 l을 1 증가 후 재귀 호출
 * 4. 두 번째 뽑았을 때 올 수 있는 모든 숫자(1~n)들을 고려하여 temp에 저장
 * 5. 만약 l이 뽑아야 하는 갯수(n)에 도달 하면 temp를 answers에 추가
 * 6. 만약 l이 n을 넘어가면 return
 * 7. answers에 있는 순열들과 answers 길이 반환
 */

function solution(n, m) {
  const answers = [];
  const temp = Array.from({ length: m }, () => 0);
  function DFS(l) {
    if (l > n) return;
    if (l === m) {
      let copy = [...temp];
      answers.push(copy);
    } else {
      for (let i = 1; i <= n; i++) {
        temp[l] = i;
        DFS(l + 1);
      }
    }
  }
  DFS(0);
  answers.forEach((answer) => console.log(answer));
  console.log(answers.length);
}

console.log(solution(3, 2));
