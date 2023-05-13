/**
 * 공원 산책
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=f22f2ab2c6284442bc76d1a6f7e65030&pm=s)
 */
function solution(park, routes) {
  // w,h 좌표에서 명령어만큼 park를 이동하는 함수
  function walk(route) {
    // 방향과 횟수를 의미하는 변수 op, n
    const op = route[0];
    const n = Number(route[1]);
    // 공원을 벗어나는지, 장애물을 만나는지 확인하기 위한 ch
    let ch = true;
    // 이동하기 전 지점을 각각 row, col에 할당
    let row = h;
    let col = w;
    // 1 ~ n까지 순회(이때, i는 이동횟수를 의미 한다.)
    for (let i = 1; i <= n; i++) {
      // op의 방향에 따라 col, row값 -1 or 1 이동
      if (op === "E") col++;
      else if (op === "W") col--;
      else if (op === "S") row++;
      else if (op === "N") row--;
      // 만약 이동 후 row, col 값에서 공원을 벗어나거나 장애물을 만나면 ch를 false로 변경
      if (
        row > park.length - 1 ||
        row < 0 ||
        col > park[0].length - 1 ||
        col < 0 ||
        park[row][col] === "X"
      ) {
        ch = false;
        break;
      }
    }
    // ch가 true일 때만 w, h를 col, row 값으로 갱신
    if (ch) {
      w = col;
      h = row;
    }
  }
  // 시작 위치 설정
  let h = park.findIndex((s) => s.includes("S"));
  let w = park[h].indexOf("S");
  // 명령어들 순회하며 command 함수 실행
  for (let j = 0; j < routes.length; j++) {
    walk(routes[j].split(" "));
  }
  return [h, w];
}

console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
