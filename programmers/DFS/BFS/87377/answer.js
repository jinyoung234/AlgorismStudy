/**
 * 교점에 별 만들기
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=0246e6c4ad0c47e6a385e26f83c14f33&pm=s)
 */
function solution(line) {
  // 교점 구하는 함수 (조합 활용)
  function dfs(l) {
    if (l >= line.length + 1) return;
    if (element.length === 2) {
      let [a, b, e] = element[0];
      let [c, d, f] = element[1];
      let x = 0;
      let y = 0;
      // x, y 좌표 구함
      x = (b * f - e * d) / (a * d - b * c);
      y = (e * c - a * f) / (a * d - b * c);
      // x, y가 정수일 때만 교점 배열에 추가
      if (Number.isInteger(x) && Number.isInteger(y)) {
        points.push([x, y]);
        // 교점 배열에 추가하면 최대 최소 x, y값 갱신
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    } else {
      element.push(line[l]);
      dfs(l + 1);
      element.pop();
      dfs(l + 1);
    }
  }
  const points = [];
  const element = [];
  // 최대, 최소 x, y
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxX = -Number.MAX_SAFE_INTEGER;
  let maxY = -Number.MAX_SAFE_INTEGER;
  // 교점 찾기 start
  dfs(0);
  // 교점 및 최대 최소 x, y값을 찾으면
  // (높은 지점 x - 낮은 지점 x + 1) 세로 : (높은 지점 y - 낮은 지점 y + 1)의 2차원 배열 생성 후 '.'으로 채움
  const paper = [...Array(maxY - minY + 1)].map(() =>
    [...Array(maxX - minX + 1)].map(() => ".")
  );
  // 교점을 순회하며 좌표 값에 해당하는 2차원 배열에 "*" 추가
  points.forEach(([x, y]) => {
    paper[maxY - y][x - minX] = "*";
  });
  // paper 돌면서 배열을 문자열로 변환
  const result = paper.map((v) => v.join(""));
  return result;
}

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
