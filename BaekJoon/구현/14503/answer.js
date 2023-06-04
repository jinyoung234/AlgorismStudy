/**
 * 로봇 청소기
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=e56690f585b542c1a45bc38991fe7de6&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const _robot = input.shift().split(" ").map(Number);
const _places = input.map((i) => i.split(" ").map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function solution(robot, places) {
  let [r, c, d] = robot;
  let [answer, cnt] = [0, 0];
  while (true) {
    // 1. 현재 칸이 청소되지 않은 경우, 현재 칸을 청소 한다.
    if (places[r][c] === 0) {
      places[r][c] = 2;
      answer++;
    }
    // 2. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우
    if (cnt === 4) {
      // 2-1. 후진 한다. (180도 회전)
      const [backx, backy] = [r + dx[(d + 2) % 4], c + dy[(d + 2) % 4]];
      // 2-2. 바라보는 방향을 유지한 채로 한 칸 후진할 수 있다면 한 칸 후진 후 1번으로 돌아간다.
      if (places[backx][backy] !== 1) {
        r = backx;
        c = backy;
        cnt = 0;
        // 2-3. 후진 할 수 없다면 종료 한다.
      } else break;
    }
    // 3. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우
    // 3-1. 왼쪽 방향으로 회전 후 1번으로 돌아간다.
    d -= 1;
    if (d < 0) d = 3;
    const [leftx, lefty] = [r + dx[d], c + dy[d]];
    if (places[leftx][lefty] === 0) {
      r = leftx;
      c = lefty;
      cnt = 0;
      // 그렇지 않다면 cnt를 증가 시켜 주변 4칸을 확인할 때 까지 while 문을 순회하며 3을 실행한다.
    } else {
      cnt++;
    }
  }
  return answer;
}

console.log(solution(_robot, _places));
