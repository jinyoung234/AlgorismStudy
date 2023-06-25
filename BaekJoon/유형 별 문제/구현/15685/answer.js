/**
 * 드래곤 커브
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=ef4e6e03dc134732a690452784c21963&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const inputs = input.slice(1).map((s) => s.split(" ").map(Number));

// 각각 동, 북, 서, 남
const DIR_TABLE = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

const dragonCarves = [];

// 드래곤 커브 만드는 함수
function makeDragonCarve([x, y], d, g) {
  const dragonCarve = [];
  // 0세대 ~ g(입력 받은 세대) 만큼 순회 하여 각 순회마다 드래곤 커브 생성
  for (let i = 0; i <= g; i++) {
    // 0세대 드래곤 커브
    if (i === 0) {
      let [nx, ny] = [x + DIR_TABLE[d][0], y + DIR_TABLE[d][1]];
      // 드래곤 커브 추가
      dragonCarve.push([
        [x, y],
        [nx, ny],
      ]);
    }
    // 1 ~ g세대 드래곤 커브
    else {
      let prevDragonCarve = dragonCarve[dragonCarve.length - 1];
      let turnDragonCarve = [...prevDragonCarve];
      let lastIdx = prevDragonCarve.length - 1;
      // 이전 세대 드래곤 커브의 끝 점
      const lastPoint = prevDragonCarve[prevDragonCarve.length - 1];
      // 1) 끝점을 (0, 0)으로 이동 시키고 나머지 점도 끝점이 이동 된 만큼 이동한다.
      const [dx, dy] = [lastPoint[0] * -1, lastPoint[1] * -1];
      turnDragonCarve = turnDragonCarve.map(([x, y]) => {
        return [x + dx, y + dy];
      });
      // 2) 끝 점을 제외하고 90도 회전 (x, y) = (-y, x) 시킨다.
      turnDragonCarve = turnDragonCarve.map(([x, y], i) => {
        if (i === lastIdx) return [x, y];
        else return [-1 * y, x];
      });
      // 3) 다시 원래 좌표 계로 돌아 온다.
      turnDragonCarve = turnDragonCarve.map(([x, y]) => {
        const [dx, dy] = [lastPoint[0], lastPoint[1]];
        return [x + dx, y + dy];
      });
      // 4) 끝점을 제외하고 이전 드래곤 커브에 추가 한다.
      for (let i = lastIdx - 1; i >= 0; i--) {
        const [x, y] = turnDragonCarve[i];
        prevDragonCarve.push([x, y]);
      }
    }
  }
  // 생성된 g세대 드래곤 커브 반환
  return dragonCarve.flat();
}

// x, y = 좌표, d = 방향, g = 세대
for (const [x, y, d, g] of inputs) {
  // 드래곤 커브 생성
  const dragonCarve = makeDragonCarve([x, y], d, g);
  // 드래곤 커브들을 모으는 배열에 추가
  dragonCarves.push(dragonCarve);
}

// 101 x 101 크기의 보드 생성
const board = Array.from(Array(101), () => Array(101).fill(0));

// 해당 보드에 존재하는 드래곤 커브만 좌표 추가
while (dragonCarves.length) {
  const dragonCarve = dragonCarves.shift();
  for (const [x, y] of dragonCarve) {
    // 여기에서 2차원 배열로 처리하도록 수정
    // 드래곤 커브의 좌표 중 일부가 0보다 작거나 100보다 클 경우 continue
    if (x < 0 || x >= 101 || y < 0 || y >= 101) continue;
    board[y][x] = 1;
  }
}

let cnt = 0;

// 100 x 100으로 순회해서 만약 드래곤 커브 좌표 들이 정사각형을 이룬다면 cnt 1 증가
for (let row = 0; row < board.length - 1; row++) {
  for (let col = 0; col < board[0].length - 1; col++) {
    if (row + 1 < 0 || row + 1 >= 101 || col + 1 < 0 || col + 1 >= 101) continue;
    if (
      board[row][col] === 1 &&
      board[row][col + 1] === 1 &&
      board[row + 1][col + 1] === 1 &&
      board[row + 1][col] === 1
    ) {
      cnt++;
    }
  }
}

// 총 정사각형의 갯수를 반환
console.log(cnt);
