/**
 * 체스판 다시 칠하기
 */
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [r, c] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((v) => v.split(""));

let white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
let black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

function solution(row, column, boards) {
  function check(a, b) {
    // 검정색 체스판, 하얀색 체스판에 대한 변수 각각 0으로 설정
    let blackCnt = 0;
    let whiteCnt = 0;
    // a, b 각각 i,j로 순회
    for (let i = a; i < a + 8; i++) {
      for (let j = b; j < b + 8; j++) {
        // 입력으로 받은 board의 각 요소와 하얀 체스판, 검은 체스판을 모두 비교해서 다르면 cnt 증가
        if (boards[i][j] !== white[i - a][j - b]) blackCnt++;
        if (boards[i][j] !== black[i - a][j - b]) whiteCnt++;
      }
    }
    // 검정, 하얀 체스판 중 더 작은 값을 리턴
    return Math.min(blackCnt, whiteCnt);
  }
  // 가장 큰 값으로 설정
  let answer = Number.MAX_SAFE_INTEGER;
  // row - 8, column - 8 각각 i, j로 순회 (행렬같이 생각하기)
  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= column - 8; j++) {
      // answer에 기존 값과 check 함수 값을 비교하여 더 작은 값을 할당
      answer = Math.min(answer, check(i, j));
    }
  }
  return answer;
}

console.log(solution(r, c, arr));
