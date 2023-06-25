/**
 * 햄버거
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = require("fs").readFileSync(filePath).toString().split("\n");
const k = Number(a.split(" ")[1]);
const strArr = b.split("");

function solution(k, arr) {
  function left(x) {
    // 자신의 위치 - k ~ 자신의 위치 - 1 까지 순회
    for (let i = x - k; i <= x - 1; i++) {
      // 만약 햄버거가 있는데, 그 햄버거를 먹을 수 있다면
      if (arr[i] === "H" && ch[i] === true) {
        // 그 위치에 있는 햄버거를 못 먹게 바꿈
        ch[i] = false;
        // true 리턴
        return true;
      }
    }
    // 만약 true가 리턴되지 않으면 false 리턴
    return false;
  }
  function right(x) {
    // 자신의 위치 + 1 ~ 자신의 위치 + k까지 순회
    for (let i = x + 1; i <= x + k; i++) {
      // 만약 햄버거가 있는데, 그 햄버거를 먹을 수 있다면
      if (arr[i] === "H" && ch[i] === true) {
        // 그 위치에 있는 햄버거를 못 먹게 바꿈
        ch[i] = false;
        // true 리턴
        return true;
      }
    }
    // 만약 true가 리턴되지 않으면 false 리턴
    return false;
  }
  // 해당 위치의 햄버거가 먹었는지 아닌지 체크하기 위한 체크 배열
  let ch = Array.from({ length: arr.length }, () => true);
  // answer 0으로 초기화
  let answer = 0;
  // 배열 전체 순회
  for (let i = 0; i < arr.length; i++) {
    // 만약 사람을 만난다면
    if (arr[i] === "P") {
      // 왼쪽으로 돌아서 만약 true이면 answer 1증가
      if (left(i)) answer++;
      // 오른쪽으로 돌아서 만약 true이면 answer 1증가
      else if (right(i)) answer++;
    }
  }
  return answer;
}

console.log(solution(k, strArr));
