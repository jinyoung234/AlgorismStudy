/** 재귀 호출 흐름
 * 1. DFS 함수 생성(L === 0이면 종료, 아니면 기존 L값에 - 1 한 후 재귀 호출)
 * 2. L이 0일때 까지 재귀 호출
 * 3. L이 0이면 종료 후 스택 프레임에서 DFS(0) pop
 * 4. 스택 프레임에 남아있던 함수들이 나머지 로직을 수행(console.log(L))
 * 5. 다 수행 하면 종료
 */
function solution(num) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(num);
}

console.log(solution(3));
