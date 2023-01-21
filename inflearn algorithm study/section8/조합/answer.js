/**
 * 알고리즘
 * 1. 메모이제이션을 위한 2차원 배열 생성(행 = n+1, 열 = r+1)
 * 2. 만약 n === r 이거나 r === 0 이면 1을 반환
 * 3. 그게 아니라면 nCr = n-1Cr-1 + n-1Cr를 만족시키기 위해 DFS(n - 1, r - 1) + DFS(n - 1, r))를 반환한다.
 * (이 때, 해당 값을 메모이 제이션 해야하기 때문에 dy[n][r]에 값 할당)
 * 4. 만약 dy[n][r]이 0보다 크다면 dy[n][r] 반환
 * 5. answer 반환
 */

function solution(n, r) {
  let answer;
  let dy = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(5, 3));
