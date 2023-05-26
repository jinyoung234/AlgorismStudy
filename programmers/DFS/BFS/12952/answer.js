/**
 * N-Queen
 * (https://www.notion.so/N-Queen-209eed1fe9e3455b88cd091c55923159)
 */
function solution(n) {
  let answer = 0;
  function dfs(board, row) {
    // 만약 n번째 row 까지 배치 되었다면 올바르게 배치 한 것 이다.
    if (row === n) {
      // answer 1 증가 후 early return 한다.
      answer++;
      return;
    }
    // col 방향으로 순회
    for (let i = 1; i <= n; i++) {
      // next번째 row를 i로 설정(이렇게 설정하는 이유는 아래와 같다.)
      // ex) [0, 2, 0, 0, 0] -> [0, 2, 4, 0, 0] -> [0, 2, 4, 1, 0] -> [0, 2, 4, 1, 3]
      const nextRow = row + 1;
      board[nextRow] = i;
      // 만약 가로, 세로, 대각선에서 서로 만나지 않는다면 dfs 재귀를 통해 그 다음 row로 이동 한다.
      if (isValid(board, nextRow)) dfs(board, nextRow);
    }
  }

  function isValid(board, row) {
    // row 방향으로 순회 한다.
    for (let i = 1; i < row; i++) {
      // 만약 i번째 row의 queen 가로 배치가 현재 row 번째 queen 배치랑 동일할 경우 false 리턴 한다.(세로는 의미 x -> queen 배치 규칙에 의해서 배치가 될 수 없기 때문)
      if (board[row] === board[i]) return false;
      // 행의 차와 열의 차가 동일한 경우(대각선 배치가 동일할 경우) false 리턴
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    // 예외 조건에 걸리지 않으면 true를 리턴 한다.
    return true;
  }

  for (let i = 1; i <= n; i++) {
    // queen을 배치할 board를 1차원 배열로 만들고 각 col을 0으로 초기화 한다.
    const board = Array.from({ length: n + 1 }, () => 0);
    // board의 1번째 row를 1로 i로 초기화 한다.
    // ex) [0, 1, 0, 0, 0] [0, 2, 0, 0, 0] [0, 3, 0, 0, 0] [0, 4, 0, 0, 0]
    board[1] = i;
    // dfs 함수를 통해서 2 ~ n 번째 row에 대한 queen 배치를 진행한다.
    dfs(board, 1);
  }
  // 올바르게 queen을 배치한 횟수를 리턴 한다.
  return answer;
}
