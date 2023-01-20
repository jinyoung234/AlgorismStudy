/**
 * 차이점
 * 1. 나는 answer를 1로 잡고 DFS 호출 하면서 answer에 값을 계속 할당하는 알고리즘을 구현
 * 2. 강사님의 코드는 answer를 선언 후 n * DFS(n - 1)로 answer에 할당 될 값을 계속 쌓은 후 마지막에 answer에 할당되는 형태
 *    ex) 2 * DFS(1) -> 3 * DFS(2) ... 5 * DFS(4) -> 5 * 24 즉, 120을 한번에 answer에 할당
 * 3. 내 코드의 경우 answer에 값을 모두 추가 후 스택 프레임이 pop될 때의 흐름이 의미 없이 지나가는 것에 비해
 *    강사님의 방식은 좀 더 자연 스럽다고 느껴졌다.
 */

function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
