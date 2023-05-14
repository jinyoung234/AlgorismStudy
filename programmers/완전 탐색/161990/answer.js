/**
 * 바탕화면 정리
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=3d5eb48abdc145beaeb49d425dba3998&pm=s)
 */
function solution(wallpaper) {
  wallpaper.map((col) => col.split(""));
  let [lux, luy, rdx, rdy] = [51, 51, -51, -51];
  const row = wallpaper.length;
  const col = wallpaper[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (wallpaper[i][j] === "#") {
        lux = Math.min(lux, i);
        luy = Math.min(luy, j);
        rdx = Math.max(rdx, i + 1);
        rdy = Math.max(rdy, j + 1);
      }
    }
  }
  return [lux, luy, rdx, rdy];
}

solution([
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
]);
