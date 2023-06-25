/**
 * 마법사 상어와 비바라기
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=a9593023b91b4b86bbf789555bc318de&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [_n, _m] = input.shift().split(" ").map(Number);
const _map = input.slice(0, _n).map((s) => s.split(" ").map(Number));
const _commands = input.slice(_n).map((s) => s.split(" ").map(Number));

const DIR_TABLE = [
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
];

function solution(n, m, map, commands) {
  let rainCloud = [
    [n - 2, 0],
    [n - 2, 1],
    [n - 1, 0],
    [n - 1, 1],
  ];
  commands.forEach((command) => {
    let [dir, num] = [command[0] - 1, command[1]];

    // 1. 모든 구름이 di 방향으로 si칸 이동한다.
    while (num--) {
      rainCloud = rainCloud.map(([row, col]) => {
        let [nRow, nCol] = [row + DIR_TABLE[dir][0], col + DIR_TABLE[dir][1]];
        // 만약 이동한 col이 바깥으로 간다면
        if (nCol > n - 1) nCol = 0;
        else if (nCol < 0) nCol = n - 1;

        if (nRow > n - 1) nRow = 0;
        else if (nRow < 0) nRow = n - 1;
        return [nRow, nCol];
      });
    }

    const visited = Array.from(Array(n), () => Array(n).fill(false));

    // 2. 각 구름에서 비가 내려 구름이 있는 칸의 바구니에 저장된 물의 양이 1 증가한다.
    rainCloud.forEach((cloud) => {
      const [row, col] = cloud;
      map[row][col]++;
      visited[row][col] = true;
    });

    // 3. 구름이 모두 사라진다.
    const prevRainCloud = [...rainCloud];
    rainCloud = [];

    // 4. 2에서 물이 증가한 칸 (r, c)에 물복사버그 마법을 시전한다.
    // 물복사버그 마법을 사용하면, 대각선 방향으로 거리가 1인 칸에 물이 있는 바구니의 수만큼 (r, c)에 있는 바구니의 물이 양이 증가한다.
    prevRainCloud.forEach((cloud) => {
      const [row, col] = cloud;
      let cnt = 0;
      for (let i = 1; i <= 4; i++) {
        const [nRow, nCol] = [row + DIR_TABLE[2 * i - 1][0], col + DIR_TABLE[2 * i - 1][1]];
        if (nRow < 0 || nRow >= n || nCol < 0 || nCol >= n || map[nRow][nCol] < 1) continue;
        cnt++;
      }
      map[row][col] += cnt;
    });

    // 5. 바구니에 저장된 물의 양이 2 이상인 모든 칸에 구름이 생기고, 물의 양이 2 줄어든다.
    // 이때 구름이 생기는 칸은 3에서 구름이 사라진 칸이 아니어야 한다.
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (!visited[row][col] && map[row][col] >= 2) {
          map[row][col] -= 2;
          rainCloud.push([row, col]);
        }
      }
    }
  });

  let answer = 0;
  // 최종 계산
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      answer += map[row][col];
    }
  }
  return answer;
}

console.log(solution(_n, _m, _map, _commands));
