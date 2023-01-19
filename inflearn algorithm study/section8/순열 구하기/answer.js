/**
 * 고려 사항
 * 1. 자연수 N이 오름차순으로 주어지며 M은 뽑은 횟수를 의미
 * 2. 출력 순서는 사전순(오름 차순)
 */

/**
 * 알고리즘
 * 1. 모든 알고리즘은 중복 순열과 동일
 * 2. 중복 순열과 차이점이라면 만약 m번 뽑았을 때 뽑은 값들이 모두 일치 하면 안되는 것
 * 3. 중복 순열이 되는 것을 막기 위해 만약 m번 뽑았을 때 p에 있는 값이 모두 같은 값이라면 스택 프레임 pop
 */

function solution(n, arr, m) {
  let answers = [];
  let p = Array.from({ length: m }, () => 0);
  function DFS(l) {
    // 뽑는 횟수가 m보다 커지면 스택 프레임 pop
    if (l > m) return;
    if (m === l) {
      // 모든 수가 중복된 값이라면 스택 프레임 pop(중복 순열이 되는 것을 방지)
      if (Math.max(...p) === Math.min(...p)) return;
      // 다 뽑으면 뽑은 순열을 answers에 추가
      let copy = [...p];
      answers.push(copy);
    } else {
      // 만약 m 만큼 뽑지 않았다면 올 수 있는 모든 값들에 대해서 p에 저장 후 l + 1로 재귀 호출
      for (let i = 0; i < n; i++) {
        p[l] = arr[i];
        DFS(l + 1);
      }
    }
  }
  DFS(0);
  return answers;
}

console.log(solution(4, [3, 6, 8, 9], 2));
