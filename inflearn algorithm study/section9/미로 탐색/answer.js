/**
 * [레퍼런스]
 * https://velog.io/@rladpwl0512/9-4-%EB%AF%B8%EB%A1%9C%ED%83%90%EC%83%89DFS
 */
function solution(board) {
  let answer = 0;
  // 상, 우, 하, 좌를 고려하여 이동하기 위해 dx, dy 배열을 선언
  let dx = [-1, 0, 1, 0]; // 상, 우, 하, 좌
  let dy = [0, 1, 0, -1]; // 상, 우, 하, 좌
  function DFS(x, y) {
    // 만약 도착점에 올 경우 answer 1 증가
    if (x === 6 && y === 6) answer++;
    else {
      // 만약 도착 점에 도달하지 않았을 경우 상, 하, 좌, 우를 고려하여 이동
      for (let i = 0; i < 4; i++) {
        // 다음 x, y 좌표를 계산(기존 x값 + dx or dy의 i번째 값)
        let nx = x + dx[i];
        let ny = y + dy[i];
        // 만약 다음 x, y 좌표가 0보다 크거나 같고 6보다 작거나 같고, 이동 하려는 좌표가 0일 경우
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          // 다음 좌표를 1로 변경하여 방문했음을 표시
          board[nx][ny] = 1;
          // 다음 좌표로 이동
          DFS(nx, ny);
          // 다음 좌표를 0으로 변경하여 방문하지 않았음을 표시
          board[nx][ny] = 0;
        }
      }
    }
  }
  // 시작점을 1로 변경하여 방문했음을 표시
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
