/**
 * 빗물
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=ea4a713e8c9a41fdbfab93f9a20ebe20&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [_n, _m] = input.shift().split(" ").map(Number);
const _blocks = input.flatMap((s) => s.split(" ").map(Number));

function solution(n, m, blocks) {
  const world = Array.from(Array(n), () => Array(m).fill(0));

  // 빗물이 고인 world를 생성
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < m; j++) {
      if (blocks[j] === 0) continue;
      blocks[j]--;
      world[i][j] = 1;
    }
  }

  // 고인 빗물의 총량
  let total = 0;
  // world의 가로 열들을 순회
  for (let col of world) {
    // col 내 0의 갯수(빗물의 수)를 세기 위해 rain을 0으로 초기화 (0 === rain)
    let rain = 0;
    // col 내 요소들을 순회
    col.forEach((cur, i) => {
      const next = col[i + 1];
      // cur 블록이 1이고 next 블록이 0이라면
      if (cur === 1 && next === 0) {
        // i + 2 ~ col의 길이까지 순회
        for (let j = i + 2; j < col.length; j++) {
          // 다시 1인 블록을 찾는다면
          if (col[j] === 1) {
            // 블록 사이에 있는 빗물의 수를 count 후 더한다.
            // ex) 1 0 0 1 => (3 - 0 - 1 = 2)
            rain += j - i - 1;
            // 빗물을 카운팅 했으니 i가 j만큼 이동하고 break 하여 다음 빗물을 카운팅 한다.
            i += j;
            break;
          }
        }
      }
    });
    // 한 column에서 빗물의 양을 측정 완료했다면 total에 카운팅 한다.
    total += rain;
  }

  // 빗물의 총량을 출력 한다.
  console.log(total);
}

solution(_n, _m, _blocks);
