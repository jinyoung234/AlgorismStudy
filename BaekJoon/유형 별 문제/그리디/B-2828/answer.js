/**
 * 사과 담기 게임
 */
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [input, ...appleLocation] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map((_) => Number(_)));
let answer;
let m = input[1];

// 첫번째 사과는 무조건 잡는다고 가정
appleLocation.shift();

function solution(m, appleLocation) {
  // 이동 횟수, 우측 / 좌측 이동 변수 각각 선언
  let move = 0;
  let left = 0;
  // right는 바구니 값에서 - 1한 값(바구니 사이즈가 2이상 이면 이미 그 만큼 이동한 것이나 마찬가지라서)
  let right = m - 1;
  // 사과 주우러 이동
  for (let i = 0; i < appleLocation.length; i++) {
    // 떨어지려는 사과 위치
    let apple = appleLocation[i] - 1;
    // 만약 사과를 주우러 오른쪽으로 이동해야하는 경우
    if (apple > right) {
      move += apple - right;
      right = apple;
      // 바구니 사이즈 고려 해서 left 수정
      left = apple - m + 1;
      // 만약 사과를 주우러 왼쪽으로 이동해야하는 경우
    } else if (apple < left) {
      move += left - apple;
      left = apple;
      // 바구니 사이즈 고려해서 right 수정
      right = apple + m - 1;
    }
  }
  return move;
}

answer = solution(m, appleLocation);

console.log(answer);
