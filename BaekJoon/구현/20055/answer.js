/**
 * 컨베이어 벨트 위의 로봇
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=8d8065bf7e9841f6bb17ee37793377be&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [_n, _k] = input.shift().split(" ").map(Number);
const _durability = input.flatMap((n) => n.split(" ").map(Number));

function solution(n, k, durability) {
  const belt = Array(n).fill(false);
  let stage = 0;

  while (true) {
    stage++;

    // 1. 벨트가 각 칸 위에 있는 로봇과 함께 한 칸 회전한다.
    durability.unshift(durability.pop());
    belt.pop();
    belt.unshift(false);

    // 벨트를 순회하며 로봇이 있다면 로봇이 있는 칸의 내구도를 1 감소 시킨다.
    belt.forEach((block, i) => {
      if (block === 1) durability[i] -= 1;
    });

    // 만약 로봇이 내려야 할 위치에 있다면 로봇을 내린다.
    if (belt[n - 1]) belt[n - 1] = false;

    // 2. 가장 먼저 벨트에 올라간 로봇부터, 벨트가 회전하는 방향으로 한 칸 이동할 수 있다면 이동한다.
    // 만약 이동할 수 없다면 가만히 있는다.

    // 내려야 할 위치 - 1부터 0까지 순회한다.
    for (let i = n - 2; i >= 0; i--) {
      // 만약 로봇이 없다면 넘어간다.
      if (!belt[i]) continue;
      // 2-1. 로봇이 이동하기 위해서는 이동하려는 칸에 로봇이 없어야 하며 그 칸의 내구도가 1 이상 남아 있어야 한다.
      if (!belt[i + 1] && durability[i + 1] > 0) {
        // 2-1 조건이 성립되면 로봇이 다음 칸으로 이동 한다.
        belt[i + 1] = true;
        // 이전 칸은 다시 빈칸으로 만든다.
        belt[i] = false;
        // 다음 칸의 내구도를 1만큼 감소 시킨다.
        durability[i + 1] -= 1;
      }
    }

    // 다시 로봇이 내려야 할 위치에 있다면 로봇을 내린다.
    if (belt[n - 1]) belt[n - 1] = false;

    // 3. 올리는 위치에 있는 칸의 내구도가 0이 아니면 올리는 위치에 로봇을 올린다.
    if (durability[0] > 0) {
      belt[0] = true;
      // 올려야 할 위치 내구도를 1만큼 감소시킨다.
      durability[0] -= 1;
    }

    // 4. 내구도가 0인 칸의 개수가 K개 이상이라면 과정을 종료한다. 그렇지 않다면 1번으로 돌아간다.
    if (durability.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0) >= k)
      break;
  }
  // 종료된 stage를 반환한다.
  console.log(stage);
}

solution(_n, _k, _durability);
