/**
 * 하노이 탑 이동 순서
 * (https://www.notion.so/8c70f8363329490b80eed937ed2ca89a?v=631d2c91ec834d35b3ad85a42e3eb7fd&p=6f1e3d67b34f4d1e82619e077cc37a12&pm=s)
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

let [cnt, answer] = [0, ""];

// 실제로 이동하는 것을 출력하는 함수
const move = (from, to) => {
  // 이동한 경로를 answer에 추가
  answer += `${from} ${to}\n`;
  // 이동한 횟수 카운트
  cnt++;
};

// 하노이의 탑의 이동 과정에 대한 함수
const hanoi = (num, from, to, other) => {
  // num이 0이면 더 이상 재귀를 수행할 수 없으므로 return
  if (num === 0) return;
  // n - 1개의 원반들을 from -> other로 이동 시킨다.
  hanoi(num - 1, from, other, to);
  // 가장 큰 원반을 from -> to로 이동 시킨다.
  move(from, to);
  // 나머지 원반들을 other -> to로 이동 시킨다.
  hanoi(num - 1, other, to, from);
};

// n개의 원반 중 가장 큰 원반이 2로 이동 나머지는 1로 이동한다는 뜻
hanoi(n, 1, 3, 2);

console.log(String(cnt));
console.log(answer);
