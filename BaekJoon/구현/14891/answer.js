/**
 * 톱니바퀴
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=3d8967b14fa8434fa7f26e46721c801e&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const _tire = input.slice(0, 4).map((s) => s.split("").map(Number));
const _turnInfo = input.slice(5).map((s) => s.split(" ").map(Number));

function solution(cogwheels, turnInfo) {
  // 회전 시킨 방법들에 대해 순회
  turnInfo.forEach(([i, turn]) => {
    const idx = i - 1;
    // 톱니 바퀴들에 대한 회전 방향들을 저장하기 위한 turns 배열 생성
    const turns = Array(cogwheels.length).fill(0);

    // target으로 지정된 톱니 바퀴의 회전 정보를 우선적으로 저장
    turns[idx] = turn;

    // target 톱니 바퀴의 오른쪽으로 순회
    for (let cnt = idx; cnt < cogwheels.length - 1; cnt++) {
      const cogwheel = cogwheels[cnt];
      const nextCogWheel = cogwheels[cnt + 1];
      // 만약 두 톱니바퀴의 맞닿는 면이 서로 다르다면
      if (cogwheel[2] !== nextCogWheel[6]) {
        // 타겟 톱니바퀴가 회전할 방향의 역방향으로 저장
        turns[cnt + 1] = -turns[cnt];
        // 만약 서로 같다면 나머지 톱니바퀴는 확인할 필요 없으므로 종료
      } else break;
    }

    // target 톱니 바퀴의 왼쪽으로 순회할 때도 오른쪽으로 순회할 때와 동일하게 진행
    for (let cnt = idx; cnt > 0; cnt--) {
      const cogwheel = cogwheels[cnt];
      const prevCogwheel = cogwheels[cnt - 1];
      if (cogwheel[6] !== prevCogwheel[2]) {
        turns[cnt - 1] = -turns[cnt];
      } else break;
    }

    // 톱니 바퀴들을 순회하며 만약 -1이면 반 시계방향으로, 1이면 시계방향으로 회전한다.
    for (let j = 0; j < cogwheels.length; j++) {
      if (turns[j] === -1) {
        cogwheels[j].push(cogwheels[j].shift());
      } else if (turns[j] === 1) {
        cogwheels[j].unshift(cogwheels[j].pop());
      }
    }
  });

  let sum = 0;
  // 톱니바퀴들을 순회하며 톱니바퀴의 12시 방향이 S라면 2의 i승만큼 sum에 더해주고 아니라면 0을 더한다.
  cogwheels.forEach((t, i) => {
    if (t[0] === 1) sum += Math.pow(2, i);
  });
  // 누적된 합을 반환한다.
  return sum;
}

console.log(solution(_tire, _turnInfo));
