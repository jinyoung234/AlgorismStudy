/**
 * 고려사항
 * 1. n = 가장 윗줄에 있는 숫자의 개수, F = 가장 밑에 줄에 있는 수
 * 2. 첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력
 */

/**
 * 알고리즘
 * 1. n에 대한 이항 계수를 combination 함수를 통해 b에 추가
 * 2. 순열을 생성 후 (순열 각 자릿수 값 * 조합 수 각 자릿수 값)을 각각 더하여 f와 일치 여부 확인
 * 3-1. 만약 같다면 순열 p를 answer에 추가 후 종료 -> answer가 답
 * 3-2. 만약 같지 않다면 다른 순열을 만든 후 2의 과정 반복
 */

function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  function combination(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
  }
  function DFS(l, sum) {
    if (flag) return;
    if (l === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[l] = i;
          DFS(l + 1, sum + p[l] * b[l]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combination(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
