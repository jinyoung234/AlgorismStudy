/**
 * 빛의 경로 사이클
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=eeb64c529951456080abb3a18fefcd09&pm=s)
 */
function solution(grid) {
  const result = [];
  // 문자열의 각 방향(상, 하, 좌, 우)을 체크 하기 위한 3차원 배열
  const cycle = grid.map((row) =>
    row.split("").map((_) => new Array(4).fill(true))
  );
  // 방향을 나타내는 배열(down, right, left, top)
  const direct = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  // 사이클 -> row -> column -> element 차례로 돌면서 문자의
  // 각 방향에 대한 사이클 확인 후 존재하면 result에 추가
  cycle.forEach((row, rdx) => {
    row.forEach((col, cdx) => {
      col.forEach((element, idx) => {
        if (element) {
          result.push(checkCycle(rdx, cdx, idx));
        }
      });
    });
  });

  function checkCycle(rdx, cdx, idx) {
    let result = 0;

    while (true) {
      // 사이클이 완성되면 종료
      if (!cycle[rdx][cdx][idx]) break;
      // 방문한 방향을 false로 변경
      cycle[rdx][cdx][idx] = false;
      // 이동했으니 1 증가
      result++;

      // 문자열의 방향에 맞는 값을 row index에 추가 (이동을 위해)
      rdx += direct[idx][0];
      // 문자열의 방향에 맞는 값을 column index에 추가(이동을 위해)
      cdx += direct[idx][1];

      // 만약 row, column이 어느 한 쪽 끝지점에 있다면 반대 방향(시작 or 끝 지점)으로 이동
      if (rdx < 0) rdx = cycle.length - 1;
      if (rdx >= cycle.length) rdx = 0;
      if (cdx < 0) cdx = cycle[0].length - 1;
      if (cdx >= cycle[0].length) cdx = 0;

      // 만약 L, R이라면 휘어지는 방향으로 idx 값 수정
      if (grid[rdx][cdx] === "L") idx = [1, 2, 3, 0][idx];
      if (grid[rdx][cdx] === "R") idx = [3, 0, 1, 2][idx];
    }

    return result;
  }
  // 오름 차순으로 정렬하여 리턴
  return result.sort((a, b) => a - b);
}

console.log(solution(["SL", "LR"]));
