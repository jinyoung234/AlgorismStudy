function solution(board) {
  let answer = 0;
  // 8방향에 대한 dx, dy 설정
  let dx = [0, 1, 1, 1, 0, -1, -1, -1];
  let dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  // board의 크기인 n 설정
  let n = board.length;
  function DFS(x, y) {
    // DFS 내에서 재귀 호출 되기 때문에 따로 board 값 초기화
    board[y][x] = 0;
    // 8방향으로 움직이며 만약 1인 값이 있다면 재귀 호출
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      // 만약 8방향으로 순회 하며 1인 값이 있다면 DFS 재귀 호출
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[ny][nx] === 1) {
        DFS(nx, ny);
      }
    }
  }
  // board 전체 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 만약 1인 좌표 찾을 경우 answer 1증가 후 board 내 좌표 값 0으로 초기화 후 DFS 함수 호출
      if (board[i][j] === 1) {
        answer++;
        board[i][j] = 0;
        DFS(j, i);
      }
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
