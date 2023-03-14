function solution(maps) {
  let answer = 1;
  // 4방향 순회를 위한 dx, dy
  let dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];
  let queue = [];
  // x, y 최대 좌표에 대한 변수 n, m
  let n = maps.length;
  let m = maps[0].length;
  // 시작 지점 queue에 추가
  queue.push([0, 0]);
  // queue에 추가 후 해당 좌표 0으로 초기화
  maps[0][0] = 0;
  while (queue.length) {
    let size = queue.length;
    // queue에 들어간 값 만큼 순회(자식 노드가 여러개 나오는 경우 고려)
    for (let i = 0; i < size; i++) {
      // queue 에서 뺀 값의 x,y 좌표
      let [x, y] = queue.shift();
      // 4방향 순회
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];
        // 만약 4방향으로 이동 중 1인 좌표를 발견할 경우
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          // 만약 도착지점에 왔다면 answer 값 추가
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          // queue에 nx, ny 값 추가
          queue.push([nx, ny]);
          // 추가 후 0으로 초기화
          maps[nx][ny] = 0;
        }
      }
    }
    // queue에 값 추가 한 후 answer 1 증가
    answer++;
  }
  // 만약 이동할 경로가 없다면 -1 리턴
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
