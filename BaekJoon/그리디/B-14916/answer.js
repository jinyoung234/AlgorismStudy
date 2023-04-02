/**
 * 거스름돈
 */
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(require("fs").readFileSync(path).toString().trim());

function solution(n) {
  let answer = 0;
  // 거슬러 줄 수 없는 경우 -1 리턴
  if (n === 1 || n === 3) return -1;
  // 거스름돈을 모두 거슬러줄 때 까지 순회
  while (n > 0) {
    // 1. 5원으로 거슬러 줄 수 있는 경우
    if (n % 2 === 1 || n % 5 === 0) {
      answer++;
      n -= 5;
      // 2. 2원으로 거슬러줄 수 있는 경우
    } else if (n % 2 === 0) {
      answer++;
      n -= 2;
    }
  }
  return answer;
}

const answer = solution(input);

console.log(answer);
