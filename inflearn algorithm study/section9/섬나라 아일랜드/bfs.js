function solution(board) {
  let answer = 0;
  // 8방향에 대한 dx, dy 설정
  let dx = [0, 1, 1, 1, 0, -1, -1, -1];
  let dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  // board의 크기인 n 설정
  let n = board.length;
  let queue = [];
  // board 순회
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 1인 좌표 찾을 경우 board[i][j] 0으로 초기화, queue에 [x,y] 좌표 push, answer 1증가
      if (board[i][j] === 1) {
        board[i][j] = 0;
        queue.push([j, i]);
        answer++;
        // queue 내 원소가 없을 때 까지 순회
        while (queue.length) {
          let [x, y] = queue.shift();
          // 8방향 순회
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            // 만약 8방향 중 1인 좌표가 있다면 board의 새로운 x,y 좌표 0으로 초기화 후 queue에 추가
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[ny][nx] === 1) {
              board[ny][nx] = 0;
              queue.push([nx, ny]);
            }
          }
        }
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
