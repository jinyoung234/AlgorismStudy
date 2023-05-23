/**
 * 무인도 여행
 * (https://www.notion.so/26d5510e2d4c4773aeb01d2576769e20?p=cb8e4bd0b6ea4cacbd215cddc7350d31&pm=s)
 */
function solution(maps) {
  const newMap = maps.map((c) => {
    return [...c].map((n) => {
      if (n !== "X") return Number(n);
      else return n;
    });
  });
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y, target) {
    let sum = target;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < newMap.length && ny < newMap[0].length) {
        if (newMap[nx][ny] !== "X") {
          const next = newMap[nx][ny];
          newMap[nx][ny] = "X";
          sum += DFS(nx, ny, next);
        }
      }
    }

    return sum;
  }
  const answer = [];
  for (let i = 0; i < newMap.length; i++) {
    for (let j = 0; j < newMap[0].length; j++) {
      if (newMap[i][j] !== "X") {
        const start = Number(newMap[i][j]);
        newMap[i][j] = "X";
        answer.push(DFS(i, j, start));
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

solution(["X591X", "X1X5X", "X231X", "1XXX1"]);
