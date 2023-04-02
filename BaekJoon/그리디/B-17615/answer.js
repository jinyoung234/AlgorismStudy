/**
 * 볼 모으기
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

const l = input.split("\n");
const d = l[1].split("");

function solution(balls) {
  // 파란공 or 빨간 공을 왼쪽으로 몰아 넣는 함수
  function left(ballColor) {
    let count = 0;
    for (let i = 0; i < balls.length; i++) {
      if (balls[i] !== ballColor) {
        while (i < balls.length) {
          if (balls[i] === ballColor) count += 1;
          i += 1;
        }
      }
    }
    return count;
  }
  // 빨간공 or 파란공을 오른쪽으로 몰아 넣는 함수
  function right(ballColor) {
    let count = 0;
    for (let i = balls.length - 1; i >= 0; i--) {
      if (balls[i] !== ballColor) {
        while (i >= 0) {
          if (balls[i] === ballColor) count += 1;
          i -= 1;
        }
      }
    }
    return count;
  }
  // 파란, 빨간 공을 각각 왼쪽 / 오른쪽으로 몰아넣을 때 가장 작은 값을 리턴
  return Math.min(left("R"), right("R"), left("B"), right("B"));
}

console.log(solution(d));
