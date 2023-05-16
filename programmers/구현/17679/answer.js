/**
 * 파일명 정렬
 * (https://school.programmers.co.kr/learn/courses/30/lessons/17679)
 */
function solution(m, n, board) {
  board = board.map((block) => block.split(""));
  while (true) {
    let founded = [];
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i - 1][j]
        ) {
          founded.push([i, j]);
        }
      }
    }
    if (!founded.length) {
      return [].concat(...board).filter((v) => !v).length;
    }
    founded.forEach(([y, x]) => {
      board[y][x] = 0;
      board[y][x - 1] = 0;
      board[y - 1][x - 1] = 0;
      board[y - 1][x] = 0;
    });
    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((v) => !v)) continue;
      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
}
