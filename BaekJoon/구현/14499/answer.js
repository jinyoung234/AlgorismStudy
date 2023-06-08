/**
 * 주사위 굴리기
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=9c5ad24a015e41779d1a98a87678f7eb&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m, y, x] = input.shift().split(" ").map(Number);
const map = input.slice(0, n).map((s) => s.split(" ").map(Number));
const prompts = input.slice(n).flatMap((s) => s.split(" ").map(Number));

const moveDice = (dice, command) => {
  const newDice = dice.slice();
  switch (command) {
    // 동쪽
    case 1:
      newDice[0] = dice[3];
      newDice[2] = dice[0];
      newDice[3] = dice[5];
      newDice[5] = dice[2];
      return newDice;
    // 서쪽
    case 2:
      newDice[0] = dice[2];
      newDice[2] = dice[5];
      newDice[3] = dice[0];
      newDice[5] = dice[3];
      return newDice;
    // 북쪽
    case 3:
      newDice[0] = dice[1];
      newDice[1] = dice[5];
      newDice[4] = dice[0];
      newDice[5] = dice[4];
      return newDice;
    // 남쪽
    case 4:
      newDice[0] = dice[4];
      newDice[1] = dice[0];
      newDice[4] = dice[5];
      newDice[5] = dice[1];
      return newDice;
  }
};
// 주사위 이동 방향
const DIRECTION = Object.freeze({
  0: [1, 0],
  1: [-1, 0],
  2: [0, -1],
  3: [0, 1],
});

function solution(N, M, x, y, map, commands) {
  // 초기 주사위는 0으로 초기화
  let dice = [0, 0, 0, 0, 0, 0];

  // 명령들을 순회
  for (const command of commands) {
    const [dx, dy] = DIRECTION[command - 1];
    // x에서 command 방향으로 이동한 x, y 좌표를 각각 nx, ny
    const [nx, ny] = [x + dx, y + dy];

    // 만약 지도 범위를 벗어나면 무시하며 출력도 하지 않는다.
    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;

    // nx, ny를 x, y 좌표에 할당
    [x, y] = [nx, ny];

    // 주사위를 command 방향으로 이동한다.
    dice = moveDice(dice, command);

    // 이동 시 map에 쓰여 있는 수가 0이라면 (주사위를 굴렸을 때 이동한 칸에 쓰여 있는 수가 0이면)
    // 주사위의 바닥면에 쓰여 있는 수가 칸에 복사 된다.
    if (map[y][x] === 0) map[y][x] = dice[5];
    // 이동 시 map에 쓰여 있는 수가 0이 아닌 경우라면
    else {
      // 칸에 쓰여 있는 수가 주사위의 바닥면으로 복사된다.
      dice[5] = map[y][x];
      // 칸에 쓰여 있는 수는 0이 된다.
      map[y][x] = 0;
    }
    // 주사위의 상단 면의 값을 구한다.
    console.log(dice[0]);
  }
}

solution(n, m, x, y, map, prompts);
