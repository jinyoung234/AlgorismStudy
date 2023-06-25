/**
 * 프린터 큐
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=e6f832e42b964eb591bea0c61e2220a1&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const t = Number(input.shift());

function solution() {
  for (let i = 0; i < t; i++) {
    let cnt = 0;
    const [n, m] = input.shift().split(" ").map(Number);
    // 1. key와 value가 있는 printQueue 생성
    const printQueue = Object.entries(input.shift().split(" ").map(Number));
    // 2. 다 출력될 때 까지 순회 진행
    while (cnt !== n) {
      // 3. 프린터 큐 내 존재하는 최대 우선 순위를 maxPriority로 지정
      const maxPriority = Math.max(
        ...Object.values(printQueue).map((_) => _[1])
      );
      // 4. printQueue 하나씩 출력 하여 key와 value를 각각 idx, priority에 저장
      const [idx, priority] = printQueue.shift();
      // 5. 만약 출력할 것이 최대 우선 순위 일 경우 cnt 증가
      if (priority === maxPriority) {
        cnt++;
        // 5-1. 만약 출력물의 인덱스가 m과 일치한다면 출력된 순서 출력 후 cnt 0으로 초기화 하고 break
        if (Number(idx) === m) {
          console.log(cnt);
          cnt = 0;
          break;
        }
        // 6. 만약 최대 우선 순위가 아닐 경우 printQueue의 맨 마지막으로 이동
      } else printQueue.push([idx, priority]);
    }
  }
}

solution();
