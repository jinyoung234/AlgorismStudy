/**
 * 행렬
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, ...b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [r, c] = a.split(" ").map(Number);
let A = b.slice(0, r).map((v) => v.split("").map(Number));
let B = b.slice(r).map((v) => v.split("").map(Number));

function solution(row, column, arrA, arrB) {
  // 행렬 A와 행렬 B를 비교 하는 함수
  function compare(listA, listB) {
    // 0 ~ 입력 받은 row 값(i), 0 ~ 입력 받은 column 값(j)로 순회
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        // 만약 arrA의 (i,j)값과 arrB의 (i,j)값이 서로 다르면 false 리턴
        if (listA[i][j] !== listB[i][j]) return false;
      }
    }
    // 모두 같다면 true 리턴
    return true;
  }
  // 어떤 3 x 3크기의 부분 행렬에 있는 모든 원소를 뒤집는 함수
  // row 시작점 = x, column 시작점 = y
  function filp(x, y) {
    // row 시작점으로 부터 +3 & column 시작점으로 부터 +3 까지 순회(3x3 순회를 위해)
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        // 좌표에 해당되는 행렬을 뒤집는다. (1이면 0, 0이면 1)
        arrA[i][j] = 1 - arrA[i][j];
      }
    }
  }
  // 초기 answer 0으로 초기화
  let answer = 0;
  // 만약 초기의 arrA와 arrB가 서로 같다면 0을 리턴
  if (compare(arrA, arrB)) return 0;
  // 입력 받은 row, column에서 -1의 값까지 순회 (index가 0부터 시작이라 -2)
  for (let i = 0; i < row - 2; i++) {
    for (let j = 0; j < column - 2; j++) {
      // 만약 arrA와 arrB가 i,j 지점에서 서로 다르다면
      if (arrA[i][j] !== arrB[i][j]) {
        // i,j 지점에서 filp 함수 실행 후 answer 증가
        filp(i, j);
        answer++;
        // 만약 부분 행렬의 원소들을 뒤집은 후 비교 했을 때 true라면 answer를 리턴
        if (compare(arrA, arrB)) return answer;
      }
    }
  }
  // 만약 answer가 리턴되지 않는다면 -1 리턴 (A를 B로 바꿀 수 없는 것이기 때문)
  return -1;
}

console.log(solution(r, c, A, B));
