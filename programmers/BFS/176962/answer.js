/**
 * 리코쳇 로봇
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=0cca7b02328e46a9b486f5f1471346f1&pm=s)
 */
const DIR = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const isMove = (nr, nc, board) => {
  return nr >= 0 && nr < board.length && 0 <= nc && nc < board[0].length && board[nr][nc] !== "D";
};

function solution(board) {
  const [n, m] = [board.length, board[0].length];
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  const queue = [];
  // 완전탐색으로 R의 위치를 찾는다.
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (board[row][col] === "R") {
        queue.push([row, col, 0]);
        visited[row][col] = true;
      }
    }
  }
  // bfs 탐색 시작
  while (queue.length) {
    const [row, col, cnt] = queue.shift();
    if (board[row][col] === "G") return cnt;
    // 4 방향 탐색
    for (const [dr, dc] of DIR) {
      let [nr, nc] = [row, col];
      // 게임판 위에 장애물이나 맨 끝에 부딪힐 때까지 미끄러져 이동
      while (isMove(nr + dr, nc + dc, board)) {
        nr += dr;
        nc += dc;
      }
      // 방문하지 않은 곳만 queue에 추가
      if (!visited[nr][nc]) {
        queue.push([nr, nc, cnt + 1]);
        visited[nr][nc] = true;
      }
    }
  }
  // 갈 수 없는 곳이라면 -1 반환
  return -1;
}
