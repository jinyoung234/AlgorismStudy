/**
 * 고려 사항
 * 1. 인자 - 1) n = 동전 종류 개수, 2) 동전 종류 3) m = 거슬러 줄 금액
 * 2. 거슬러 줄 금액에 맞게 가장 적은 수의 동전으로 교환 해야 한다.
 * 3. 동전의 개수는 제한이 없다.
 */

/**
 * 알고리즘
 * 1. 가장 큰 숫자로 answer 저장
 * 2. 만약 거스름 돈이 딱 떨어지지 않는다면 l마다 올 수 있는 모든 동전 종류를 고려 하여 순회
 * 3. l + 1, sum + 고려한 동전 종류 DFS 인자에 추가 후 재귀 호출
 * 4. 만약 거스름돈 금액이 sum보다 작아진다면 스택 프레임 pop
 * 5. 거스름 돈이 딱 떨어진다면 answer과 l중 작은 값을 answer에 추가
 * 6. 최소 동전 수인 answer 반환
 */

function solution(n, arr, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(l, sum) {
    // 금액 초과하면 스택 프레임 pop
    if (sum > m) return;
    if (l >= answer) return;
    // 거스름돈이 딱 떨어지는 경우
    if (sum === m) {
      // sum이 최소 동전 횟수면 answer에 추가
      answer = Math.min(answer, l);
    } else {
      // 딱 떨어지지 않으면 l의 값마다 올 수 있는 모든 동전의 수를 고려해서 DFS 재귀 호출
      // (ex) l = 1 -> sum에 각각 1, 2, 5를 더하는 경우의 수)
      for (let i = 0; i < n; i++) {
        DFS(l + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(3, [1, 2, 5], 15));
