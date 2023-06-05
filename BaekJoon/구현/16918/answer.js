/**
 * 봄버맨
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=b3ac78cf6fe647fcb1e36fbca2036d86&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const a = input.shift().split(" ").map(Number);
const arr = input.map((s) => s.split(""));

function solution(info, arr) {
  const [r, c, n] = info;
  // 초기 시간은 1초로 설정(0초에는 아무 일도 일어나지 않기 때문)
  let time = 1;
  // arr의 row, col 길이 만큼 모든 배열 요소에 대해 false로 선언한 bomb
  const bomb = Array.from(Array(r), () => Array(c).fill(false));
  while (time !== n) {
    // 폭탄이 터질 경우
    if (time % 2 === 0) {
      for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
          // 만약 bomb에 저장한 폭탄의 위치라면
          if (bomb[i][j] === true) {
            // 폭발한 위치 및 인접한 위치의 폭발물들 모두 폭발
            arr[i][j] = ".";
            bomb[i][j] = false;
            if (i + 1 >= 0 && i + 1 < r && arr[i + 1][j] === "O")
              arr[i + 1][j] = ".";
            if (i - 1 >= 0 && i - 1 < r && arr[i - 1][j] === "O")
              arr[i - 1][j] = ".";
            if (j + 1 >= 0 && j + 1 < c && arr[i][j + 1] === "O")
              arr[i][j + 1] = ".";
            if (j - 1 >= 0 && j - 1 < c && arr[i][j - 1] === "O")
              arr[i][j - 1] = ".";
          }
        }
      }
      // 폭탄을 설치할 경우
    } else {
      // 폭탄이 설치 되어있지 않은 모든 칸에 폭탄을 설치한다.
      // 이때, 2초 마다 폭발할 초기 폭탄의 위치를 기억하기 위해 bomb에 저장한다.
      for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
          if (arr[i][j] === "O") bomb[i][j] = true;
          if (arr[i][j] === ".") arr[i][j] = "O";
        }
      }
    }
    // 시간 1초 증가
    time++;
  }
  // 문자열 형태로 반환
  return arr.map((s) => console.log(s.join("")));
}

solution(a, arr);
